import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/main';
import Nav from './components/Nav/main';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Categories from './components/Categories';
import Users from './components/Users';
import NotFound from './components/NotFount';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <div className="content ml-auto mt-5">
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/blogs" component={Blogs} />
              <Route path="/categories" component={Categories} />
              <Route path="/users" component={Users} />
              <NotFound />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
