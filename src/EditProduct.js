import { TableCell, Input, TableRow, Button } from "@material-ui/core";
function EditProduct({ product, products, setProducts }) {
  function handInputName(event) {
    const value = event.target.value;
    const newProduct = products.map((p) =>
      p.id === product.id ? { ...p, name: value } : p
    );
    setProducts(newProduct);
  }
  function handInputCategory(event) {
    const value = event.target.value;
    const newProduct = products.map((p) =>
      p.id === product.id ? { ...p, category: value } : p
    );
    setProducts(newProduct);
  }
  function handInputPrice(event) {
    const value = event.target.value;
    const newProduct = products.map((p) =>
      p.id === product.id ? { ...p, price: value } : p
    );
    setProducts(newProduct);
  }
  function handInputStock(event) {
    const value = event.target.value;
    const newProduct = products.map((p) =>
      p.id === product.id ? { ...p, stockQuantity: value } : p
    );
    setProducts(newProduct);
  }
  return (
    <TableRow>
      <TableCell>
        <Input
          type="text"
          name="name"
          value={product.name}
          onChange={handInputName}
          required
        />
      </TableCell>
      <TableCell>
        <Input
          type="text"
          name="category"
          value={product.category}
          onChange={handInputCategory}
          required
        />
      </TableCell>
      <TableCell>
        <Input
          type="text"
          name="price"
          value={product.price}
          onChange={handInputPrice}
          required
        />
      </TableCell>
      <TableCell>
        <Input
          type="text"
          name="stockQuantity"
          value={product.stockQuantity}
          onChange={handInputStock}
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

export default EditProduct;
