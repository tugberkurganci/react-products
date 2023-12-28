import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import ProductDetail from "./pages/Product/ProductDetail";
import AddProduct from "./pages/Product/AddProduct";
import { useState } from "react";


function App() {

	const [searchKey, setSearchKey] = useState<string>();
	

	const filteredList =(searchKy:string)=>{
		console.log(searchKy);
		setSearchKey(searchKy);
		console.log(searchKey);

		


	}
	return (
		<>
			<Navbar filteredList={filteredList}/>
			
				<Routes>
					<Route path="/" element={<Homepage searchKey={searchKey} />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/add-product" element={<AddProduct />}></Route>
					<Route path="/product-detail/:productId" element={<ProductDetail/>}></Route>
					<Route path="*" element={<p>Not Found</p>}></Route>
					
				</Routes>
			
		</>
	);
}
export default App;


