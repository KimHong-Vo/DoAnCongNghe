import React from "react";
import { faker } from '@faker-js/faker';
import "./CardDetailPopup.scss";
const FComment = (props) => {
  return (
    <div className="ui comments">
      <div className="comment">
        <a href="#" className="avatar">
          <img src={faker.image.avatar() } size="small" alt="avatar" />
        </a>
        <div className="content">
          <a href="#" className="author">{props.author}</a>

          <div className="metadata">
            <span className="date">{props.date}</span>
          </div>
          <div className="text">
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default FComment;  