import React, { useState } from 'react';
import './thread.scss';
import ItemPost from '../item-post/item-post';
import PostForm from '../post-form/post-form';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

function getFullThread(threads, pathname) {
  const indexDots = pathname.indexOf(':');
  const indexPlus =  pathname.indexOf('+');
  const threadId = pathname.slice(indexDots + 1, indexPlus);
  const boardName = pathname.slice(indexPlus + 1);
  return threads[boardName].filter(thread => thread[0].id === parseInt(threadId))[0]
}

function Thread(param) {
  const data = getFullThread(param.currentStore.threads, useLocation().pathname);
  const originalPost = data[0];
  const replays = data.slice(1);
  let [ isFormClosed, setFromToggle ] = useState(true);

  const addNewPostOnThread = (newPost) => {
    newPost = Object.assign({
      id: Math.floor(Math.random() * 15000),
      date: new Date().toDateString()
    }, newPost)
    const postBean = { post: newPost, opId: originalPost.id}
    param.onAddPost(postBean);
  }
  
  return (
    <div className="thread">
      <article className="form-container">
        { isFormClosed
          ? <button onClick={() => setFromToggle(isFormClosed = !isFormClosed)}>Reply to Post</button>
          : <>
              <PostForm onAddNewPost={newPost => addNewPostOnThread(newPost)}/>
              <button onClick={() => setFromToggle(isFormClosed = !isFormClosed)} className="close-form-btn">X</button>
            </>
        }
      </article>
      <div className="item-post op-post">
        <img className="image" src={originalPost.img} alt=""></img>
        <div className="message">
          <div className="post-header">
            <span className="name">{originalPost.name}</span>
            <span>{originalPost.date}</span>
            <span>No.{originalPost.id}</span>
          </div>
          <div>{originalPost.comment}</div>
        </div>
      </div>
      {replays.map((reply, index) => <ItemPost props={reply} key={index}/>)}
    </div>
    );
}

export default connect(
  state => ({
      currentStore: state
  }),
  dispatch => ({
     onAddPost: postBean => {
      dispatch({ type: 'ADD_POST', postBean })
     }
  })
)(Thread);