import Customer from "../entity/customer";
import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";

describe("Order service unit test", () => {

  it("should place an order", () => {
    const customer = new Customer("1", "John Doe");  
    const orderItem = new OrderItem("1", "123", "Product 1", 100, 1);

    const order = OrderService.placeOrder(customer, [orderItem]);

    expect(customer.rewardsPoints).toEqual(10);
    expect(order.total()).toEqual(100);

  });

  it("should add reward points", () => {
    const customer = new Customer("1", "John Doe");
    expect(customer.rewardsPoints).toEqual(0);

    customer.addRewardsPoints(100);
    expect(customer.rewardsPoints).toEqual(100);

    customer.addRewardsPoints(200);
    expect(customer.rewardsPoints).toEqual(300);

    customer.addRewardsPoints(300);
    expect(customer.rewardsPoints).toEqual(600);
  });
  




  it("should change the prices of all orders", () => {
    const orderItem1 = new OrderItem("1", "123", "Product 1", 100, 1);
    const orderItem2 = new OrderItem("2", "123", "Product 2", 200, 2);
    const orderItem3 = new OrderItem("3", "123", "Product 3", 300, 3);

    const order1 = new Order("o1", "c1", [orderItem1]);
    const order2 = new Order("o2", "c2", [orderItem2]);
    const order3 = new Order("o3", "c3", [orderItem3]);

    const total = OrderService.total([order1, order2, order3]);

    expect(total).toEqual(1400);
  });
});
