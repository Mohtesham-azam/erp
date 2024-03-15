import React, { useRef } from "react";

export default function AddProduct({ setProducts }) {
  const nameRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();
  const stockQuantityRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const category = event.target.category.value;
    const price = event.target.price.value;
    const stockQuantity = event.target.stockQuantity.value;
    const newProduct = {
      id: 6,
      name,
      category,
      price,
      stockQuantity,
    };
    setProducts((prevProducts) => {
      return prevProducts.concat(newProduct);
    });
    nameRef.current.value = "";
    categoryRef.current.value = "";
    priceRef.current.value = "";
    stockQuantityRef.current.value = "";
  };
  return (
    <div class="card">
      <div class="card-body">
        <form class="form-inline row" onSubmit={handleSubmit}>
          <div class="form-group col-sm-3">
            <input
              class="form-control"
              type="text"
              name="name"
              placeholder="Product Name"
              ref={nameRef}
              required
            />
          </div>
          <div class="form-group col-sm-3">
            <input
              class="form-control"
              type="text"
              name="category"
              placeholder="Category"
              ref={categoryRef}
              required
            />
          </div>
          <div class="form-group col-sm-3">
            <input
              class="form-control"
              type="text"
              name="price"
              placeholder="Price"
              ref={priceRef}
              required
            />
          </div>
          <div class="form-group col-sm-3">
            <input
              class="form-control"
              type="text"
              name="stockQuantity"
              placeholder="Stock Quantity"
              ref={stockQuantityRef}
              required
            />
          </div>
          <div class="form-group">
            <button class="btn btn-primary" type="submit">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
