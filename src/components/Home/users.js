import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMale, faFemale} from '@fortawesome/free-solid-svg-icons';

class Users extends Component {
  render() {
    return (
      <div className="dash-card dash-users col-12 row">
        <div className="col-12 pb-3">
          <h2>Users: </h2>
        </div>
        <div className="col-12">
          <table className="table table-responsive-md">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Country</th>
                <th scope="col">Email</th>
                <th scope="col">Age</th>
                <th scope="col">Joined</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Yassine Mellouki</td>
                <td>
                  <FontAwesomeIcon icon={faMale} size="2x" />
                </td>
                <td>Morocco</td>
                <td>
                  <a href="mailto:yassinemellouki4@gmail.com">
                    yassinemellouki4@gmail.com
                  </a>
                </td>
                <td>22</td>
                <td className="date">Wed Jul 24 2019 20:52:38</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jhon Doe</td>
                <td>
                  <FontAwesomeIcon icon={faMale} size="2x" />
                </td>
                <td>USA</td>
                <td>
                  <a href="mailto:jhon@doe.com">Jhon@doe.com</a>
                </td>
                <td>24</td>
                <td className="date">Wed May 12 2019 02:30:30</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Ethical Hacker</td>
                <td>
                  <FontAwesomeIcon icon={faFemale} size="2x" />
                </td>
                <td>Spain</td>
                <td>
                  <a href="mailto:ethical.hacker@offensive.com">
                    ethical.hacker@offensive.com
                  </a>
                </td>
                <td>31</td>
                <td className="date">Fri Apr 4 2019 8:20:08</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Users;
