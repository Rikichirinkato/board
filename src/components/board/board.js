import React, { useState }  from 'react';
import './board.scss';
import ThreadPreview from '../thread-preview/thread-preview';
import { connect } from 'react-redux';
import PostForm from '../post-form/post-form';

function Board(params) {
  let posts = params.currentStore.threads[params.header];
  let [ isFormClosed, setFromToggle ] = useState(true);

  const addNewThread = (originalPost) => {
    const newThread = Object.assign({
      no: Math.floor(Math.random() * 15000),
      date: new Date().toDateString()
    }, originalPost)
    params.onAddThread({ boardName: params.header, thread: newThread });
  }

  return (
    <>
      <h2 className="header"> Welcome to {params.header}</h2>
      <article className="form-container">
        { isFormClosed
          ? <button onClick={() => setFromToggle(isFormClosed = !isFormClosed)}>Start a New Thread</button>
          : <>
              <PostForm onAddNewPost={newPost => addNewThread(newPost)}/>
              <button onClick={() => setFromToggle(isFormClosed = !isFormClosed)} className="close-form-btn">X</button>
            </>
        }
      </article>
      <article className="thread-list">
        {posts.map((thread, index) => <ThreadPreview params={{thread: thread, header: params.header}} key={index}/>)}
      </article>
    </>
    );
}

export default connect(
  state => ({
      currentStore: state
  }),
  dispatch => ({
    onAddThread: newThread => {
     dispatch({ type: 'ADD_THREAD', post: newThread })
    }
 })
)(Board);
