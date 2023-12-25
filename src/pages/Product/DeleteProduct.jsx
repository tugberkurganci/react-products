import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function DeleteProduct() {
  const {productId} =useParams();
  const [isDeleted, setDeleted] = useState(false);

  useEffect(() => {
    if (isDeleted) {
      console.log("Product deleted successfully");
      console.log(productId);
     
    }
  }, [isDeleted]);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`https://dummyjson.com/products/${productId}`);
      console.log(response);
      setDeleted(true);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Delete Product</h2>
      <p>Are you sure you want to delete this product?</p>
      <button type="button" className="btn btn-danger" onClick={handleDelete}>
        Delete Product
      </button>
    </div>
  );
}
