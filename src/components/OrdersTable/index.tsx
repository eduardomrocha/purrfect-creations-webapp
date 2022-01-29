import { Table } from "react-bootstrap";
import { OrderData } from "../../types/order";

interface IOrdersTableProps {
  orders: OrderData[];
  caption?: string;
}

export function OrdersTable({ orders, caption }: IOrdersTableProps) {
  return (
    <Table className="align-items-center" striped bordered hover>
      <caption>{caption}</caption>
      <thead>
        <tr>
          <th>#ID</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Placed</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.productName}</td>
            <td>
              {new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
                minimumFractionDigits: 0,
                maximumFractionDigits: 2
              }).format(order.price)}
            </td>
            <td>
              {new Intl.DateTimeFormat("en-GB").format(new Date(order.orderPlaced))}
            </td>
            <td>{order.firstName}</td>
            <td>{order.lastName}</td>
            <td>{order.address}</td>
            <td>{order.email}</td>
            <td>{order.orderStatus}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
