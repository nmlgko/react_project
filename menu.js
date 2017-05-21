import React from 'react';
import { render } from "react-dom";



class Menu extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			selectedIndex: undefined
		}

		this.setIndex = (ind) => {
			this.setState({
				selectedIndex: ind
			})
		}

		this.setUndefined = this.setIndex.bind( this, undefined );

		this.mapper = ( item, index ) => {
			// return <Item key = { "item" + index } >{item}</Item>

			return <Item 
				key = { index.toString() }
				header = { item.header }
				items = { item.items }
				index = { index }
				selectedIndex = { this.state.selectedIndex }
				setIndex = { this.setIndex }
			/>
		}
		// эта запись идентична верхней записи --- key = { index.toString() } ---. Пишем в том случае, когда мы знаем, что ф-ция простая
		// this.mapper = ( item, index ) => (
		// 	<Item key={}>{item}</Item>
		// )
	}

	render(){
		return <div className="menuWrapper" onMouseOut = { this.setUndefined }>
				{this.props.structure.map( this.mapper )}
			</div>
	}
}

class Item extends React.Component{

	constructor(props){
		super(props);
		this.mover = () => {
			this.props.setIndex( this.props.index );
		}
	}

	render(){
		const curInd = this.props.index;
		const curSel = this.props.selectedIndex;

		return <div className="" onMouseOver = {this.mover}>
			{ this.props.header }
			{ curInd === curSel ? <Dropdown items={this.props.items}/> : null }
			
		</div>
	}
}

class Dropdown extends React.Component{

	constructor(props){
		super(props);
		this.mapper = ( item, index ) => {
			return <li key = { index.toString() } >{item}</li>
		}
	}

	render(){
		return <div className="">
			<ul>
				{this.props.items.map( this.mapper )}
			</ul>
			</div>
	}

}

export default Menu;