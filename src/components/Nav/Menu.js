import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faColumns,
  faNewspaper,
  faUsers,
  faListAlt,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
class Menu extends Component {
  render() {
    return (
      <div className="nav-menu">
        <ul className="list-unstyled">
          <li>
            <NavLink exact to="/" activeClassName="active">
              <div className="list-item-icon m-auto">
                <FontAwesomeIcon
                  icon={faColumns}
                  size="lg"
                  className="m-auto d-block"
                />
              </div>
              <div className="list-item-text d-block text-center">
                <span>Dashboard</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs">
              <div className="list-item-icon m-auto">
                <FontAwesomeIcon
                  icon={faNewspaper}
                  size="lg"
                  className="m-auto d-block"
                />
              </div>
              <div className="list-item-text d-block text-center">
                <span>Blogs</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories">
              <div className="list-item-icon m-auto">
                <FontAwesomeIcon
                  icon={faListAlt}
                  size="lg"
                  className="m-auto d-block"
                />
              </div>
              <div className="list-item-text d-block text-center">
                <span>Categories</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/users">
              <div className="list-item-icon m-auto">
                <FontAwesomeIcon
                  icon={faUsers}
                  size="lg"
                  className="m-auto d-block"
                />
              </div>
              <div className="list-item-text d-block text-center">
                <span>Users</span>
              </div>
            </NavLink>
          </li>
          <li>
            <a href="#top">
              <div className="list-item-icon m-auto">
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  size="lg"
                  className="m-auto d-block"
                />
              </div>
              <div className="list-item-text d-block text-center">
                <span>Logout</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Menu;
