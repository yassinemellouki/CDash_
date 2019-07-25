import React, {Component} from 'react';
import Statistics from './statistics';
import Users from './users';
import RecentPosts from './recent_posts';

class Home extends Component {
  render() {
    return (
      <div className="home row text-align-center mt-5">
        <Statistics />
        <Users />
        <RecentPosts />
      </div>
    );
  }
}

export default Home;
