import React from 'react';
import Proptypes from 'prop-types';

class AddTodo extends React.Component {
 // first get the data input into form then render it to app
	state = {
		title : ''
	
	}
	onChange = (e) =>{
		// this.setState({title : e.target.value});
		// for re-usability in case we have many different fields
		this.setState({ [e.target.name] : e.target.value});
	}

	onSubmit = (e) =>{
		e.preventDefault();
		this.props.addTodo(this.state.title); //whatever we submit in title gets added
		// clear input after submit
		this.setState({ title : ' '});
	}

	render() {
		return (
			<form onSubmit={this.onSubmit} style ={{display:"flex"}}>
				<input type="text" 
				name="title" 
				style={{flex:"10",padding:"5px"}}
				placeholder="Add Todo.." 
				value={this.state.title}
				onChange={this.onChange}
				/>
				<input type="submit" value="submit" className="btn"
				style={{flex:"1"}}/>
			</form> 
		)
	}
}

AddTodo.propTypes = {
	addTodo : Proptypes.func.isRequired
}

export default AddTodo;