import React from "react";
import { render } from "react-dom";

const prodArrs = [
	{
		category: "phones",
		name: "prod1",
		src: "http://lorempixel.com/400/200/animals/9/",
		link: "/prod1",
		price: "111 $"
	},
	{
		category: "tabs",		
		name: "prod2",
		src: "http://lorempixel.com/400/200/animals/8/",
		link: "/prod2",
		price: "222 $"
	},
	{
		category: "notes",		
		name: "prod3",
		src: "http://lorempixel.com/400/200/animals/7/",
		link: "/prod3",
		price: "3333 $"
	},
	{
		category: "clocks",
		name: "prod4",
		src: "http://lorempixel.com/400/200/animals/9/",
		link: "/prod1",
		price: "4444 $"
	},
	{
		category: "laptops",		
		name: "prod5",
		src: "http://lorempixel.com/400/200/animals/8/",
		link: "/prod2",
		price: "5 $"
	},
	{
		category: "accessories",		
		name: "prod6",
		src: "http://lorempixel.com/400/200/animals/8/",
		link: "/prod2",
		price: "6666 $"
	}
]

class ButtonBuy extends React.Component{
	constructor(props){
		super(props);
		this.clickHandler = () => {
			alert("Products add to cart")
		}
	}

	render(){
		return(
			<button className="btn-buy" onClick={this.clickHandler}> buy now </button>
		)
	}
}

class ItemProduct extends React.Component{

	render(){
		const p = this.props;

		return (
			<div>
				<a href="" className="name_cat">{ p.category }</a>
				<a href={ p.link }>
					<img src={ p.image } />
					<span className="name">{ p.name }</span>
				</a>
				<strong className="price">{ p.price }</strong>
				<ButtonBuy />
			</div>
		)
	}
}

class ProductsList extends React.Component{

	constructor(props){
		super(props);

		this.mapper = ( item, index ) => {

			return <li key = { index.toString() } className="products-item">
				<ItemProduct
					category = { item.category }		
					image = { item.src }
					link = { item.link }
					name = { item.name }
					price = { item.price }
				/>
			</li>
			
		}
	}

	render(){
		return (
			<div className="products-wrapper">
				<ul className="products-list">
					{
						this.props.prodArrs.map( this.mapper )
					}
				</ul>
			</div>
		)
	}
}

class Products extends React.Component{

	

	render(){
		return (
			// <div className="products">
				<ProductsList prodArrs={prodArrs} />
			// </div>
		)
	}
}

export default Products;