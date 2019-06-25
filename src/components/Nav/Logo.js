import React , {Component} from 'react';
import ReactSVG from 'react-svg';
import Logo from '../../img/logo/logo.svg';

class LogoSm extends Component{
	render() {
		return (
			<div className="nav-logo">
				<ReactSVG src={Logo}/>
			</div>
		);
	}
};
export default LogoSm;
