import React from "react";
import { render } from "react-dom";

export class Greeting extends React.Component{

	constructor( props ){
		super( props );
		this.state = {
			p: true
		}
	}

	render(){
			const p = this.props;
			return (
					<div>

							<h1>Hello! I am {p.name} {p.surname}</h1>
							<div>{p.children}</div>

					</div>
			);
	}
}

export class Root extends React.Component{
	constructor( props ){
		super(props)
		this.state = {
			color: "#fff"
		}
		this.changeColor = e => {
			this.setState({
			 color: e.target.value
			})
		}
	}

		render(){
				return (
					<div>
							I am root!
							<Greeting name="Alex" surname="Fomin">
									<h2>CHIIILDDD!!!</h2>
							</Greeting>
							<input onInput = {this.changeColor}/>
							<ClickButton value="my Button" color={this.state.color}>
								<h1>Hello</h1>
							</ClickButton>
							<MyName name="Nadezhda" boldText={true} />
							<Squares size={3} color="#654769"/>
					</div>
				);
		}
};

const getRandom = to => ( Math.random() * to ) | 0;

export class MyName extends React.Component{
	constructor( props ){
		super(props)
		this.state = {
			marginLeft: 0
		}
		this.clickHandler = () => {
			this.setState( state => ({
				marginLeft: getRandom( 250 )
			}));
		}
	}

		render(){
			if( this.props.boldText === true ){
				const obj = {marginLeft: this.state.marginLeft + "px"}
				return(
					<strong style = {obj} onClick={this.clickHandler}>
						{this.props.name}
					</strong>
				);
			}

				return(
					<div>
						{this.props.name}
					</div>
				);

		}
};

export class Squares extends React.Component{
	render(){
		var arr = [];
		for( var i=0, obj; i<this.props.size; i++ ){
			obj = {background: this.props.color}
			arr.push(
				<div style= {obj}>
					{i}
				</div>
			)
		}

		return(
			<div>
				{arr}
			</div>
		)
	}

}

export class ClickButton extends React.Component{

	constructor( props ){
		super( props );
		this.state = {
			isOpened: false
		}

		this.handler = () => {
			this.setState(
				curState => ({
					isOpened: !curState.isOpened
				})
			);
		}
	}

	componentWillReceiveProps( nextProps ){
	this.isWhite =  nextProps.color === "#fff" ;

	}

	render(){
		const obj = {
			background: this.props.color,
			transition: "all 1s linear"
		}
		return (
			<div>
				<button onClick={this.handler} style = {obj} >
				 {this.isWhite ? "color is white": this.props.value}
				</button>
				{this.state.isOpened ? <Info>{this.props.children}</Info> : null}
			</div>
		);
	}
};

export class Info extends React.Component{
	render(){
		return(
			<div>{this.props.children}</div>
		);
	}
}
 
