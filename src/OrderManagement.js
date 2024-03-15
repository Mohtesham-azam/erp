import { useState } from "react";
import mockOrders from "./mockOrders";
import EditOrder from "./EditOrder";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";

const OrderManagement = () => {
  const [orders, setOrders] = useState(mockOrders);
  const [updateState, setUpdateState] = useState(-1);

  return (
    <div className="Orders">
      <h1>Orders Management</h1>
      <form onSubmit={handleSubmit}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Order Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) =>
                updateState === order.id ? (
                  <EditOrder
                    order={order}
                    orders={orders}
                    setOrders={setOrders}
                  />
                ) : (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.customerName}</TableCell>
                    <TableCell>{order.orderDate}</TableCell>
                    <TableCell>{order.status}</TableCell>
                    <TableCell>
                      <Button class="btn btn-success">View Details</Button>
                      <Button
                        class="btn btn-primary"
                        onClick={() => handleEdit(order.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        class="btn btn-danger"
                        type="button"
                        onClick={() => handleDelete(order.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </form>
    </div>
  );

  function handleEdit(id) {
    setUpdateState(id);
  }
  function handleDelete(id) {
    const newOrder = orders.filter((o) => o.id !== id);
    setOrders(newOrder);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const status = event.target.status.value;
    const newOrder = orders.map((o) =>
      o.id === updateState
        ? {
            ...o,
            status: status,
          }
        : o
    );
    setOrders(newOrder);
    setUpdateState(-1);
  }
};

export default OrderManagement;
