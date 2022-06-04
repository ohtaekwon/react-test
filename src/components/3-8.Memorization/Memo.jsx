import React, { useState } from "react";
import Comments from "./Comments";

const commentList = [
  { title: "Comment1", content: "message1", likes: 1 },
  { title: "Comment2", content: "message2", likes: 1 },
  { title: "Comment3", content: "message3", likes: 1 },
  { title: "Comment4", content: "message4", likes: 1 },
];
export default function Memo() {
  const [comments, setComments] = useState(commentList);
  return (
    <div>
      <Comments commentList={comments} />
    </div>
  );
}
