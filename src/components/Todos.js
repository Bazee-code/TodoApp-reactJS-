import React from 'react';
import Todoitem from './Todoitem.js';
import Proptypes from 'prop-types';

class Todos extends React.Component{

	render() {
	  	console.log(this.props.todos);
	  	return this.props.todos.map((todo)=>
	  		<Todoitem key={todo.id} todo={todo} 
	  		markComplete = {this.props.markComplete}
	  		delTodo = {this.props.delTodo}
	  		/>)
	  }
	}

	// propTypes
	// validation for our props
	Todos.propTypes = {
		todos: Proptypes.array.isRequired,
		markComplete : Proptypes.func.isRequired,
		delTodo : Proptypes.func.isRequired
	}

export default Todos;

// search how we write functions / es6 in react js in the morning