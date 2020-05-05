import React from 'react';
import './thread-preview.scss';
import { Link } from "react-router-dom";
import ItemPost from '../item-post/item-post';

export default function ThreadPreview(props) {
  const originalPost = props.params.thread[0];
  const replays = props.params.thread;

  return (
    <div className="thread">
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
        <span>
          <Link to={`thread/:${originalPost.id}+${props.params.header}`} params={{ originalPost: `${originalPost.id}+${props.params.header}`}}>replay</Link>
        </span>
      </div>
      {replays.slice(1, 3).map((reply, index) => <ItemPost props={reply} key={index}/>)}
    </div>
    );
}