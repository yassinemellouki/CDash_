import React , {Component} from 'react';
import ReactCountryFlag from "react-country-flag";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/free-solid-svg-icons';

class Profile extends Component{
	render() {
		return (
				<div className="profile float-right mr-5">
					<div className="profile-items d-flex justify-content-between align-items-center">
						<div className="country">
								<ReactCountryFlag styleProps={{
										width: '40px',
										height: '40px'
										}} 
									code="us" svg
								/>
						</div>
						<div className="notify">
							<a href="#top">
							<div className="bell">
								<FontAwesomeIcon icon={faBell} size="2x" color="white" />
							</div>
							<div className="count">
								<span>7</span>
							</div>
							</a>
						</div>
						<div className="photo">
						<a href="#top">
							<div className="img">
								<img src="https://randomuser.me/api/portraits/lego/5.jpg" alt="profile pic" />
							</div>
						</a>
						</div>
					</div>
				</div>
		);
	}
};
export default Profile;
