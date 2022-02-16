import React from "react";
import "./addProduct.scss";

export default function AddProduct() {
  return (
    <div className="addProduct">
      <div className="addProductWrapper">
        <h2 className="addProductTitle">New Product</h2>
        <form className="addProductForm">
          <label className="addProductLabel">Image</label>
          <input className="addProductInput file" type="file" />
          <label className="addProductLabel">Name</label>
          <input
            className="addProductInput"
            type="text"
            placeholder="Airpods"
          />
          <label className="addProductLabel">Stock</label>
          <input className="addProductInput" type="number" placeholder="123" />
          <label for="status" className="addProductLabel">
            Active
          </label>
          <select name="status" id="status" className="addProductSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <button className="addProductBtn">Create</button>
        </form>
      </div>
    </div>
  );
}
