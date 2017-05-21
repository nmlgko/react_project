import React from "react";
import { render } from "react-dom";
require ( "./style.css" );
import Menu from "./menu.js";
// import Greeting from "./firstComponents.js";
import Products from "./products.js"; 





// const items = [ "menuitem1", "menuitem2" ];
// const dropChild = [ "first", "second" ];
const structure = [
	{
		header: "menuitem1",
		items: [
			"first",
			"second"
		]
	},
	{
		header: "menuitem2",
		items: [
			"one",
			"two",
			"three"
		]
	},
	{
		header: "menuitem3",
		items: [
			"item1",
			"item2"
		]
	}
]

class Root extends React.Component{
	render(){
		return (
			<div>
				<Menu structure={structure}/>
				<Products />
			</div>
		)
	}
}



const root = document.getElementById( "root" );

render( React.createElement( Root ), root );
