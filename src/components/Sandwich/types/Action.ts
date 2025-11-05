export type Action =
  | { type: "sandwich/addBread" }
  | { type: "sandwich/addCheese" }
  | { type: "sandwich/addBacon" }
  | { type: "sandwich/addSalad" }
  | { type: "sandwich/reset" };