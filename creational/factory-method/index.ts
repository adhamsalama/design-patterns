import { Logistics, RoadLogistics, SeaLogistics } from "./factory";

const WEIGHT = 1001;

function main() {
  const roadLogistics: Logistics = new RoadLogistics();
  const truck = roadLogistics.createTransport();
  if (truck.canDeliver(WEIGHT)) {
    console.log(`Truck can deliver ${WEIGHT} kg`);
    console.log(`cost = ${roadLogistics.planDeliveryCost(WEIGHT)}`);
  } else {
    console.log(`Truck can't deliver ${WEIGHT} kg`);
  }
  const seaLogistics: Logistics = new SeaLogistics();
  const ship = seaLogistics.createTransport();
  if (ship.canDeliver(WEIGHT)) {
    console.log(`Ship can deliver ${WEIGHT} kg`);
    console.log(`cost = ${seaLogistics.planDeliveryCost(WEIGHT)}`);
  } else {
    console.log(`Ship can't deliver ${WEIGHT} kg`);
  }
}

main();
