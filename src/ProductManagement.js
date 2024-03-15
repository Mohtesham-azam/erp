import { useState } from "react";
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
import AddProduct from "./AddProduct";
import mockProduct from "./mockProduct";
import EditProduct from "./EditProduct";

function ProductManagement() {
  const [products, setProducts] = useState(mockProduct);
  const [updateState, setUpdateState] = useState(-1);

  return (
    <div className="Products">
      <h1>Products Management</h1>
      <form onSubmit={handleSubmit}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Price(usd)</TableCell>
                <TableCell>Stock Quantity</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) =>
                updateState === product.id ? (
                  <EditProduct
                    product={product}
                    products={products}
                    setProducts={setProducts}
                  />
                ) : (
                  <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.stockQuantity}</TableCell>
                    <TableCell>
                      <Button
                        class="btn btn-primary"
                        onClick={() => handleEdit(product.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        class="btn btn-danger"
                        type="button"
                        onClick={() => handleDelete(product.id)}
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
      <AddProduct setProducts={setProducts} />
    </div>
  );

  function handleEdit(id) {
    setUpdateState(id);
  }
  function handleDelete(id) {
    const newProduct = products.filter((p) => p.id !== id);
    setProducts(newProduct);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const category = event.target.category.value;
    const price = event.target.price.value;
    const stockQuantity = event.target.stockQuantity.value;
    const newProduct = products.map((p) =>
      p.id === updateState
        ? {
            ...p,
            name: name,
            category: category,
            price: price,
            stockQuantity: stockQuantity,
          }
        : p
    );
    setProducts(newProduct);
    setUpdateState(-1);
  }
}

export default ProductManagement;
