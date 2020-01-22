import React from 'react';
import Proptypes from 'prop-types';

class Todoitem extends React.Component {
	getStyle = ()=>{
		// if(this.props.todo.completed){
		// 	return {
		// 		textDecoration : 'line-through'
		// 	}
		// }else{
		// 	return{
		// 		textDecoration : 'none'
		// 	}
		// }

		// ternary operator
		return {
			backgroundColor : '#f4f4f4',
			padding : '10px',
			borderBottom : '1px #ccc dotted',
			textDecoration : this.props.todo.completed ? 'line-through' :
			'none'
		}
	};
	// in arrow functions,'this' is alrady binded to our function hence we do
	// do not need to do the binding ourselves
	// markComplete =(e)=>{
	// 	console.log(this.props);
	// }

	// delTodo = (e)=>{
	// 	console.log(this.props);
	// }

	// THE DEFINITION OF PROPS VARIES IN EACH COMPONENT WE CREATE

	render() {
		// destructuring
		const {id,title} = this.props.todo;
		return (
			
			<div style={this.getStyle()}>
			
			<p>
			<input type="checkbox" onChange={this.props.markComplete.bind(this,id)}
			/> {' '}

			{title}

			<button style = {btnStyle} onClick = {this.props.delTodo.bind(this,id)}>X</button>
			</p>
			</div>
		)
	}
}

const btnStyle = {
	padding : "3px 5px",
	background : "red",
	color :"white",
	border: "none",
	cursor : "pointer",
	borderRadius : "50%",
	float : "right"
}

// const itemStyle ={
// 	backgroundColor : "#f4f4f4"
// }

Todoitem.propTypes = {
	todo : Proptypes.object.isRequired,
	markComplete : Proptypes.func.isRequired,
	delTodo : Proptypes.func.isRequired
}

export default Todoitem; 