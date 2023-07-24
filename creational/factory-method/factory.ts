// https://refactoring.guru/design-patterns/factory-method/typescript/example

export abstract class Logistics {
  abstract createTransport(): Transport;
  planDeliveryCost(weight: number): number {
    const transport = this.createTransport();
    const canDeliver = transport.canDeliver(weight);
    if (!canDeliver) return -1;
    return weight * 2;
  }
}

export interface Transport {
  maxWeight: number;
  canDeliver(weight: number): boolean;
}

export class RoadLogistics extends Logistics {
  createTransport(): Truck {
    return new Truck();
  }
}

export class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship();
  }
  // Overrides the method because cost calculation is different
  planDeliveryCost(weight: number): number {
    const transport = this.createTransport();
    const canDeliver = transport.canDeliver(weight);
    if (!canDeliver) return -1;
    return weight * 3;
  }
}

export class Truck implements Transport {
  maxWeight = 1000;
  canDeliver(weight: number): boolean {
    return weight > this.maxWeight ? false : true;
  }
}

export class Ship implements Transport {
  maxWeight = 5000;
  canDeliver(weight: number): boolean {
    return weight > this.maxWeight ? false : true;
  }
}
