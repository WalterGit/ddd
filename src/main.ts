import Address from "./domain/entity/address";
import Customer from "./domain/entity/customer";
import Order from "./domain/entity/order";
import OrderItem from "./domain/entity/order_item";

let customer = new Customer("123", "Walter Silva");
const address = new Address("street 1", 1, "city 1", "zip 1");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "123", "item 1", 10, 1);
const item2 = new OrderItem("2", "123", "item 2", 15, 2);
const order = new Order("1", "123", [item1, item2]);
