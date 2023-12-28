import React, { useState } from "react";
import { Link } from "react-router-dom";


type Props = {filteredList(search:string):void }

const Navbar = (props: Props) => {
	const [search, setSearch] = useState<string>("")
	const{filteredList}=props
  return (
	<nav
	className="navbar bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary"
	data-bs-theme="dark"
  >
	<div className="container-fluid">
	  <a className="navbar-brand" href="#">
		Navbar
	  </a>
	  <button
		className="navbar-toggler"
		type="button"
		data-bs-toggle="collapse"
		data-bs-target="#navbarSupportedContent"
		aria-controls="navbarSupportedContent"
		aria-expanded="false"
		aria-label="Toggle navigation"
	  >
		<span className="navbar-toggler-icon"></span>
	  </button>
	  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		<ul className="navbar-nav me-auto mb-2 mb-lg-0">
		  <li className="nav-item">
			<Link to="/about" onClick={()=>{setSearch("")}}>
			  About
			</Link>
		  </li>
		 
		  <li className="nav-item">
			<div className="mb-4"></div>
		  </li>
		  <li className="nav-item">
			<Link  to="/"   onClick={()=>{setSearch("");filteredList("")}}>
			  Ana Sayfa
			</Link>
		  </li>
		</ul>
		<form className="d-flex" role="search">
		  <input
			className="form-control me-2"
			type="search"
			placeholder="Search"
			aria-label="Search"
			onChange={(e)=>{setSearch(e.target.value)}}
			value={search} 
		  />
		  <button className="btn btn-outline-success" type="submit" onClick={(e)=>{e.preventDefault();filteredList(search)}}>
			Search
		  </button>
		</form>
	  </div>
	</div>
  </nav>
  )
}

export default Navbar

