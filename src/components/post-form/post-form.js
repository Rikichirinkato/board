import React from 'react';
import './post-form.scss';

export default function PostFrom({ onAddNewPost }) {
  let name = '';
  let comment = '';
  let img = '';

  const handleLangChange = (event) => {
    event.preventDefault();
    name = name ? name : 'Anonymous'
    const newPost = { name, comment, img }
    onAddNewPost(newPost);
    document.getElementById('addNewPostform').reset();
  }
  
  return (
    <form className="new-post-from" id="addNewPostform">
      <input type="text" name="name" onChange={(event) => name = event.target.value} placeholder="Name"></input>
      <textarea name="comment" onChange={(event) => comment = event.target.value} placeholder="Comment"></textarea>
      <input type="text" name="img-url" onChange={(event) => img = event.target.value} placeholder="Image Url"></input>
      <button name="sublit" onClick={(event) => handleLangChange(event)}>Submit</button>
    </form>
    );
}