// ?  keyof: type operator

type RichPeopleVehicle = {
  car: string;
  bike: string;
  cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeopleVehicle;

const myVehicle: MyVehicle2 = "car";

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user: User = {
  id: 222,
  name: "Fajla",
  address: {
    city: "Dhaka",
  },
};

const myAddress = user["address"];

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

const result = getPropertyFromObj(user, "id");
console.log(result);

const product = {
  brand: "HP",
};

const result2 = getPropertyFromObj(product, "brand");
const student = {
  id: 12,
  name: "Fajla",
  mobile: "2012312",
  roll: 21,
};

const result3 = getPropertyFromObj(student, "mobile");
