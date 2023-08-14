import { NIL } from "uuid";
import Product from "./product";

describe("Products unit test", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let product = new Product("", "123", 100);
    }).toThrowError("Product ID is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      let product = new Product("1", "", 100);
    }).toThrowError("Product name is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      let product = new Product("1", "xpto", -1);
    }).toThrowError("Product price not is less than zero");
  });

  it("should change name", () => {
    let product = new Product("1", "xpto", 100);
    product.changeName("new name");
    expect(product.name).toBe("new name");
  });

  it("should change price", () => {
    let product = new Product("1", "xpto", 100);
    product.changePrice(200);
    expect(product.price).toBe(200);
  });

});
