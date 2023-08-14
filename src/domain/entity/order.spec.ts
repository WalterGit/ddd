import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit test", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let order = new Order("", "123", []);
    }).toThrowError("Order ID cannot be blank");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      let order = new Order("123", "", []);
    }).toThrowError("CustomerId cannot be blank");
  });

  it("Deve ter 1 ou mais itens no pedido", () => {
    expect(() => {
      let order = new Order("123", "123", []);
    }).toThrowError("Itens são obrigatórios");
  });

  it("should calculate total", () => {
    const orderItems = [
      new OrderItem("0", "120", "item 1", 100, 1),
      new OrderItem("1", "121", "item 2", 150, 2),
      new OrderItem("2", "122", "item 3", 200, 2),
      new OrderItem("3", "123", "item 4", 500, 2),
    ];

    const testCases = [
      { items: [orderItems[0]], expectedTotal: 100 },
      { items: [orderItems[0], orderItems[1]], expectedTotal: 400 },
      { items: [orderItems[0], orderItems[1], orderItems[2]], expectedTotal: 800 },
      { items: [orderItems[0], orderItems[2]], expectedTotal: 500 },
      { items: [orderItems[0], orderItems[3]], expectedTotal: 1100 },
    ];

    testCases.forEach((testCase) => {
      const order = new Order("o1", "123", testCase.items);
      const total = order.total();
      expect(total).toBe(testCase.expectedTotal);
    });
  });

  it("Deve lançar erro quando a quantidade é menor ou igual a zero", () => {
    expect(() => {
      const item = new OrderItem("0", "120", "item 1", 100, -1);
      const order = new Order("o1", "123", [item]);
    }).toThrowError("Quantidade é menor ou igual a zero");
  });
});
