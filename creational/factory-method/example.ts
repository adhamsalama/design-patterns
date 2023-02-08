// https://refactoring.guru/design-patterns/factory-method/typescript/example

abstract class Logistics {
  abstract createTransport(): Transport;
  planDeliveryCost(weight: number): number {
    const transport = this.createTransport();
    const canDeliver = transport.deliver(weight);
    if (!canDeliver) return -1;
    return weight * 2;
  }
}

interface Transport {
  maxWeight: number;
  deliver(weight: number): boolean;
}

class RoadLogistics extends Logistics {
  createTransport(): Truck {
    return new Truck();
  }
}

class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship();
  }
  // Overrides the method because cost calculation is different
  planDeliveryCost(weight: number): number {
    const transport = this.createTransport();
    const canDeliver = transport.deliver(weight);
    if (!canDeliver) return -1;
    return weight * 3;
  }
}

class Truck implements Transport {
  maxWeight = 1000;
  deliver(weight: number): boolean {
    return weight > this.maxWeight ? false : true;
  }
}

class Ship implements Transport {
  maxWeight = 5000;
  deliver(weight: number): boolean {
    return weight > this.maxWeight ? false : true;
  }
}

const seaLogistics = new SeaLogistics();
const seaCost = seaLogistics.planDeliveryCost(200);

const roadLogistics = new RoadLogistics();
const roadCost = roadLogistics.planDeliveryCost(200);

console.log({ seaCost, roadCost });
