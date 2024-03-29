import React, {Component} from 'react';
import Title from './title';
import Profile from './profile';
class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="float-right py-3">
          <Title />
          <Profile />
        </header>
        <div className="clearfix"></div>
      </React.Fragment>
    );
  }
}
export default Header;
