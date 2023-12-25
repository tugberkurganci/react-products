import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import ProductDetail from "./pages/Product/ProductDetail";
import AddProduct from "./pages/Product/AddProduct";
import DeleteProduct from "./pages/Product/DeleteProduct";

function App() {
	return (
		<>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/add-product" element={<AddProduct />}></Route>
					<Route path="/delete-product/:productId" element={<DeleteProduct />}></Route>
					<Route path="/product-detail/:productId" element={<ProductDetail/>}></Route>
					<Route path="*" element={<p>Not Found</p>}></Route>
					
				</Routes>
			</BrowserRouter>
		</>
	);
}
export default App;