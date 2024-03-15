import { TableCell, Input, TableRow, Button } from "@material-ui/core";
function EditOrder({ order, orders, setOrders }) {
  function handInputStatus(event) {
    const value = event.target.value;
    const newOrder = orders.map((o) =>
      o.id === order.id ? { ...o, status: value } : o
    );
    setOrders(newOrder);
  }
  return (
    <TableRow>
      <TableCell>{order.id}</TableCell>
      <TableCell>{order.customerName}</TableCell>
      <TableCell>{order.orderDate}</TableCell>
      <TableCell>
        <Input
          type="text"
          name="status"
          value={order.status}
          onChange={handInputStatus}
          required
        />
      </TableCell>
      <TableCell>
        <Button class="btn btn-primary" type="submit">
          Update
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default EditOrder;
