import React , {Component} from 'react';
import Title from './title';
import Profile from './profile';
class Header extends Component{
	render() {
		return (
			<header className="float-right py-3">
				<Title />	
				<Profile />	
			</header>
		);
	}
};
export default Header;
