// mapped types

// map

const arrayOfNum: number[] = [1, 2, 3];
const arrayOfString: string[] = ["1", "2", "3"];

const arrayOfStringUsingMap: string[] = arrayOfNum.map((num) => num.toString());

type AreaOfNum = {
  height: number;
  width: number;
};
type height = AreaOfNum["height"];

// * manual
// type AreaOfString = {
//   height: string;
//   width: string;
// };

// *
type Area<T> = {
  // [key in 'height' | 'width']: string;
  // [key in keyof AreaOfNum]: string;
  [key in keyof T]: T[key];
};

const area1: Area<{ height: number; width: string }> = {
  height: 23,
  width: "20",
};
