import React from "react";

export class ModalWindow extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			x: 200,
			y: 100,
			isCurtain: false
		}

		// this.moveBy = ( mX, mY ) => {
		// 	this.setState( state => ({
		// 		x: state.x + mX,
		// 		y: state.y + mY
		// 	}))
		// }


		// this.moveBy2 = ( mX, mY ) => {
		// 	this.setState( {
		// 		x: this.state.x + mX,
		// 		y: this.state.y + mY
		// 	})
		// }

		this.showCurtain = () => {
			this.setState({
				isCurtain: true
			})
		}
		this.hideCurtain = () => {
			this.setState({
				isCurtain: false
			})
		}

		this.moveBy = ( e ) => {
			var ev = e.nativeEvent;
			this.setState( state => ({
				x: state.x + ev.movementX,
				y: state.y + ev.movementY
			}))
			console.log( e.nativeEvent );
		}

	}

	render(){
		const s = this.state;
		const p = this.props;
		const styleObj = {
			left: s.x + "px",
			top: s.y + "px"
		}

		return(
			<div>
				{ s.isCurtain ? <div className = "curtain" onMouseUp = { this.hideCurtain } onMouseMove = { this.moveBy } /> : null }
				<div className="modalWindow" style = { styleObj } >
					<Header title={ p.title } moveBy = { this.moveBy } showCurtain = { this.showCurtain }/>
					<Main>{ p.children }</Main>
				</div>
			</div>
		)
	}
}

class Header extends React.Component{
	constructor(props){
		super(props);

		this.firstMove = () => {
			this.props.moveBy( 10, 10 );
		}

		this.showCurtain = () => {
			this.props.showCurtain()
		}
	}

	render(){
		return(
			// <div className = "modalHead" onClick = { this.firstMove } >
				// <h3>{ this.props.title }</h3>
				// <button>X</button>
			// </div>

			<div className = "modalHead" onMouseDown = { this.showCurtain } >
				<h3>{ this.props.title }</h3>
				<button>X</button>
			</div>
		)
	}
}

class Main extends React.Component{
	render(){
		return(
			<div>
				{ this.props.children }
			</div>
		)
	}
}
