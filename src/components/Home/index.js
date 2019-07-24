import React, {Component} from 'react';
import Statistics from './statistics';

class Home extends Component {
  render() {
    return (
      <div className="home row text-align-center mt-5">
        <Statistics />
      </div>
    );
  }
}

export default Home;
