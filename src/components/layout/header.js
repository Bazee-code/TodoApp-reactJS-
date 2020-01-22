import React from 'react';
import {Link} from 'react-router-dom';

function Header (){

	const headerStyle = {
			textAlign : "center",
			fontSize : "25px",
			background : "grey",
			color : "white",
			padding : "10px"
		}

	const linkStyle = {
		textDecoration : "none",
		color : "white"
	}

	return(
		<div style={headerStyle}>
			<h2>TodoApp</h2>
			<Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
		</div>
		)

};


export default Header;