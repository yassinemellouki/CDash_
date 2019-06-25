import React, {Component} from 'react';
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
          <li className="active">
            <a href="#top">
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
            </a>
          </li>
          <li>
            <a href="#top">
              <div className="list-item-icon m-auto">
                <FontAwesomeIcon
                  icon={faNewspaper}
                  size="lg"
                  className="m-auto d-block"
                />
              </div>
              <div className="list-item-text d-block text-center">
                <span>Categories</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#top">
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
            </a>
          </li>
          <li>
            <a href="#top">
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
            </a>
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
