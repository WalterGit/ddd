import Address from "./address";
import Customer from "./customer";

describe("Customer unit test", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let customer = new Customer("", "John Doe");
    }).toThrowError("Customer ID is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      let customer = new Customer("123", "");
    }).toThrowError("Customer name is required");
  });

  it("should change name", () => {
    let customer = new Customer("123", "Jhon Doe");
    customer.changeName("Walter");
    expect(customer.name).toBe("Walter");
  });

  it("should activate customer", () => {
    const customer = new Customer("1", "Customer 1");
    const address = new Address("street 1", 1, "city 1", "zip 1");
    customer.Address = address;
    customer.activate();
    expect(customer.isActivate()).toBe(true);
  });
});
