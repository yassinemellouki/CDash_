import React, {Component} from 'react';
import {Editor} from 'react-draft-wysiwyg';
import {EditorState, convertToRaw} from 'draft-js';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';

class ModalPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new_post: {title: null, content: null, category: null},
      editorState: EditorState.createEmpty(),
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }
  componentDidUpdate() {
    console.log(this.state.new_post);
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
    console.log(this.state.new_post);
  }
  handleFormChange(e) {
    if (e.target.value === 'Category') {
      this.setState({
        new_post: {...this.state.new_post, [e.target.name]: null},
      });
      console.log(e.target.name);
      console.log(e.target.value);
    } else {
      this.setState({
        new_post: {...this.state.new_post, [e.target.name]: e.target.value},
      });
      console.log(e.target.name);
      console.log(e.target.value);
    }
  }
  onEditorStateChange: Function = editorState => {
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const markup = draftToHtml(rawContentState);
    this.setState({
      editorState,
      new_post: {content: markup},
    });
  };
  closeMe(e) {
    e.stopPropagation();
    let postModal = document.getElementById('postModal');
    if (
      e.target.classList.contains('show') ||
      e.target.classList.contains('close') ||
      e.target.parentNode.classList.contains('close')
    ) {
      console.log(e.target.parentNode.classList.contains('close'));
      console.log(e.target.classList.contains('close'));
      postModal.classList.toggle('show');
      postModal.classList.toggle('d-block');
    } else {
      return;
    }
  }
  render() {
    return (
      <div
        className="modal fade"
        id="postModal"
        onClick={this.closeMe}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="postModal"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="postModal">
                Add a new post:
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="post-form">
                <form action="" onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      onChange={this.handleFormChange}
                      id="title"
                      placeholder="Post Title"
                      className="form-control"
                      type="text"
                      name="title"
                    />
                  </div>
                  <div className="form-group">
                    <Editor
                      placeholder="This is a text edito. Add and Edit as you want"
                      wrapperClassName="wrapper-class"
                      editorClassName="editor-class"
                      toolbarClassName="toolbar-class"
                      editorState={this.state.editorState}
                      onEditorStateChange={this.onEditorStateChange}
                      hashtag={{
                        separator: ' ',
                        trigger: '#',
                      }}
                    />
                  </div>
                  <div className="input-group">
                    <select
                      id="select-tag"
                      className="custom-select"
                      onChange={this.handleFormChange}
                      name="tag">
                      <option defaultValue>Category</option>
                      <option value="lifestyle">Lifestyle</option>
                      <option value="travle">Travle</option>
                      <option value="school">Cook</option>
                      <option value="music">Music</option>
                    </select>
                  </div>
                  <div className="add-btn mt-4">
                    <button type="submit" className="m-auto border-0 py-1 px-3">
                      Add Post
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalPost;
