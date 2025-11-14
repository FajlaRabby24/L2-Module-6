// * utility types

type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};

// * Pick<>
type ProductSummary = Pick<Product, "id" | "name" | "price">;

// * Omit<>
type ProductWithoutStock = Omit<Product, "stock" | "color" | "price">;

// * Required<>
type ProductRequired = Required<Product>;

const product: ProductRequired = {
  id: 222,
  name: "mouse",
  price: "20",
  stock: 100,
  color: "blue",
};

// * Partial<>
type OptionProduct = Partial<Product>;

// * Readonly<>
type ProductreadOnly = Readonly<Product>;

// * Record<>
const emptyObj: Record<string, unknown> = {};
emptyObj.price = 20;
