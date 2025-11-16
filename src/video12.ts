// * utility types

type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};

/* 
  ? Pick<> -> 
  type ProductSummary = {
   id: number;
   name: string;
   price: string;
}
*/
type ProductSummary = Pick<Product, "id" | "name" | "price">;

/* 
  ? Omit<> ->
  type ProductWithoutStock = {
    id: number;
    name: string;
  }
*/
type ProductWithoutStock = Omit<Product, "stock" | "color" | "price">;

/*
  ? Required<>
  type ProductRequired = {
    id: number;
    name: string;
    price: string;
    stock: number;
    color: string;
  }
  */
type ProductRequired = Required<Product>;

/*
  ? Partial<>
  type OptionProduct = {
    id?: number;
    name?: string;
    price?: string;
    stock?: number;
    color?: string;
  }
*/
type OptionProduct = Partial<Product>;

/*
 ? Readonly<>
 type ProductreadOnly = {
    readonly id: number;
    readonly name: string;
    readonly price: string;
    readonly stock: number;
    readonly color?: string;
  }
*/
type ProductreadOnly = Readonly<Product>;

/* 
  ? Record<>
  * সব key string, value যেকোনো টাইপ -> unknown
*/
const emptyObj: Record<string, unknown> = {};
emptyObj.price = true;
