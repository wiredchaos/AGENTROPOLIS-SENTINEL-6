export class EvidenceGraph {
  private readonly edges = new Map<string, Set<string>>();

  connect(producer: string, consumer: string): void {
    const consumers = this.edges.get(producer) ?? new Set<string>();
    consumers.add(consumer);
    this.edges.set(producer, consumers);
  }

  directConsumers(symbol: string): string[] {
    return [...(this.edges.get(symbol) ?? [])].sort();
  }

  blastRadius(symbol: string): string[] {
    const seen = new Set<string>();
    const queue = [symbol];
    while (queue.length) {
      const current = queue.shift();
      if (!current) continue;
      for (const next of this.edges.get(current) ?? []) {
        if (seen.has(next)) continue;
        seen.add(next);
        queue.push(next);
      }
    }
    return [...seen].sort();
  }

  invalidate(symbol: string): string[] {
    return [symbol, ...this.blastRadius(symbol)];
  }
}
