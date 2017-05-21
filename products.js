import React from "react";
import { render } from "react-dom";

const prodArrs = [
	{
		name: "prod1",
		src: "http://lorempixel.com/400/200/animals/9/",
		link: "/prod1",
		price: "111 $"
	},
	{
		name: "prod2",
		src: "http://lorempixel.com/400/200/animals/8/",
		link: "/prod2",
		price: "222 $"
	},
	{
		name: "prod3",
		src: "http://lorempixel.com/400/200/animals/7/",
		link: "/prod3",
		price: "3333 $"
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
			<button className="btn-buy" onClick={this.clickHandler}>{ "buy now" }</button>
		)
	}
}

class ItemProduct extends React.Component{

	render(){
		return (
			<div>
				<a href={ this.props.link }>
					<img src={ this.props.image } />
					<span className="name">{ this.props.name }</span>
				</a>
				<strong className="price">{ this.props.price }</strong>
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