// * conditional type: je type condition er upor nirvorsheel

type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;

type RichPeopleVehicle = {
  bike: string;
  car: string;
  ship: string;
};

// type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;
type CheckVehicle<T> = T extends keyof RichPeopleVehicle ? true : false;

type HasBike = CheckVehicle<"ship">;
