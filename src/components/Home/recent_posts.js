import React, {Component} from 'react';
import img_post_1 from './../../img/posts/post-1.jpg';
import img_post_2 from './../../img/posts/post-2.jpg';
import img_post_3 from './../../img/posts/post-3.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons';

class RecentPosts extends Component {
  render() {
    return (
      <div className="dash-card dash-posts col-12 row">
        <div className="col-12 pb-3">
          <h2>Recent Posts: </h2>
        </div>
        <div className="col-12 row">
          <div className="col-md-3 post add-post">
            <a
              href="#/"
              className="post-link text-center text-uppercase d-flex align-items-center justify-content-center">
              <div className="add-post-box">
                <span className="d-inline-block m-auto">Add a new post</span>
                <div className="plus my-3">
                  <div className="circle p-2"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3 post p-0">
            <a className="post-link" href="#/">
              <div className="post-image">
                <img src={img_post_1} className="post-img" alt="first" />
              </div>
              <div className="text-content px-4">
                <div className="post-title">
                  <h4 className="font-weight-bold mt-4">
                    Redux state container
                  </h4>
                </div>
                <div className="post-content">
                  <p>
                    Elit unde debitis suscipit ratione quos laboriosam Non
                    distinctio officiis numquam voluptas dolore? Dignissimos
                    praesentium mollitia at vitae.
                  </p>
                </div>
                <div className="post-actions">
                  <div className="btn-more float-left">
                    <a href="#/">
                      <span>read more</span>
                    </a>
                  </div>
                  <div className="btn-edit float-right">
                    <a href="#/">
                      <FontAwesomeIcon icon={faEdit} color="#4496ce" />
                      <span>edit post</span>
                    </a>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3 post">
            <a className="post-link" href="#/">
              <div className="post-image">
                <img src={img_post_2} className="post-img" alt="first" />
              </div>
              <div className="text-content px-4">
                <div className="post-title">
                  <h4 className="font-weight-bold mt-4">
                    API & big data solution
                  </h4>
                </div>
                <div className="post-content">
                  <p>
                    Elit unde debitis suscipit ratione quos laboriosam Non
                    distinctio officiis numquam voluptas dolore? Dignissimos
                    praesentium mollitia at vitae.
                  </p>
                </div>
                <div className="post-actions">
                  <div className="btn-more float-left">
                    <a href="#/">
                      <span>read more</span>
                    </a>
                  </div>
                  <div className="btn-edit float-right">
                    <a href="#/">
                      <FontAwesomeIcon icon={faEdit} color="#4496ce" />
                      <span>edit post</span>
                    </a>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3 post">
            <a className="post-link" href="#/">
              <div className="post-image">
                <img src={img_post_3} className="post-img" alt="first" />
              </div>
              <div className="text-content px-4">
                <div className="post-title">
                  <h4 className="font-weight-bold mt-4">
                    Data visualization with D3.js
                  </h4>
                </div>
                <div className="post-content">
                  <p>
                    Elit unde debitis suscipit ratione quos laboriosam Non
                    distinctio officiis numquam voluptas dolore? Dignissimos
                    praesentium mollitia at vitae.
                  </p>
                </div>
                <div className="post-actions">
                  <div className="btn-more float-left">
                    <a href="#/">
                      <span>read more</span>
                    </a>
                  </div>
                  <div className="btn-edit float-right">
                    <a href="#/">
                      <FontAwesomeIcon icon={faEdit} color="#4496ce" />
                      <span>edit post</span>
                    </a>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentPosts;
