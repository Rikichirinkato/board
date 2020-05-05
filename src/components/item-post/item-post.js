import React  from 'react';
import './item-post.scss';

export default function ItemPost(props) {
  props = props.props;
  return (
    <div className="item-post">
      { props.img ? <img className="image" src={props.img} alt=""></img> : null}
      <div className="message">
        <div className="post-header">
          <span className="name">{props.name}</span>
          <span>{props.date}</span>
          <span>No.{props.id}</span>
        </div>
        <div>{props.comment}</div>
      </div>
    </div>
    );
}
