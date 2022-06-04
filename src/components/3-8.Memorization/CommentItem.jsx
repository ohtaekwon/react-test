import React from "react";
import "./CommentItem.css";

export default function CommentItem({ title, content, likes }) {
  return (
    <div className="CommentItem">
      <span className="title">{title}</span>
      <span className="content">{content}</span>
      <span className="likes">{likes}</span>
    </div>
  );
}
