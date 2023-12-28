import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import axios from "axios";
import { ProductModel } from "../../models/ProductModel";

type Props = { searchKey: string |undefined };

const Homepage = (props: Props) => {
  const { searchKey } = props;
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    fetchProducts();
  }, [searchKey]);

  const fetchProducts = async () => {
    let response = await axios.get("https://dummyjson.com/products");
	console.log(searchKey)
    if (searchKey) {

      setProducts(response.data.products.filter((product: ProductModel) =>
        Object.values(product).some(
          (value: any) =>
            typeof value === "string" &&
            value.toLowerCase().includes(searchKey.toLowerCase())
        )
      ));
	  
    } else {
      setProducts(response.data.products);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-6 col-12 mb-5">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
