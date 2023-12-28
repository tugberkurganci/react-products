import React from "react";
import {Link} from "react-router-dom";
import { useDeleteProduct } from "../../pages/Product/useDeleteProduct";
import { ProductModel } from "../../models/ProductModel";


type Props = {product :ProductModel}

const ProductCard = (props: Props) => {
	const{product}=props;
	const { isDeleted, handleDeleteClick } = useDeleteProduct(String(product.id));
	
  return (
	<div className="card">
			<img src={props.product.thumbnail} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{product.title}</h5>
				<p className="card-text">{product.description}</p>
				<Link
					to={`/product-detail/${product.id}`}
					className="btn btn-primary"
				>
					Details
				</Link>
				<button
          onClick={() =>handleDeleteClick()} 
          className="btn btn-danger"
             >Delete</button>
			</div>
		</div>
  )
}

export default ProductCard
