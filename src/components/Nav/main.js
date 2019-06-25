import React , {Component} from 'react';
import Logo from './Logo';
import Menu from './Menu';

class Nav extends Component{
	render() {
		return (
			<nav>
				<Logo />
				<Menu />	
			</nav>
		);
	}
};

export default Nav ;
