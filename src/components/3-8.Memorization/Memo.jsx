import React, { useEffect, useState } from "react";
import Comments from "./Comments";

const commentList = [
  { title: "Comment1", content: "message1", likes: 1 },
  {
    title: "Comment2",
    content: "message2",
    likes: Math.floor(Math.random() * 10),
  },
  {
    title: "Comment3",
    content: "message3",
    likes: Math.floor(Math.random() * 10),
  },
  {
    title: "Comment4",
    content: "message4",
    likes: Math.floor(Math.random() * 10),
  },
];
export default function Memo() {
  const [comments, setComments] = useState(commentList);

  useEffect(() => {
    const interval = setInterval(() => {
      setComments((preveComment) => [
        ...preveComment,
        {
          title: `Comment${preveComment.length + 1}`,
          content: `message${preveComment.length + 1}`,
          likes: Math.floor(Math.random() * 10),
        },
      ]);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Comments commentList={comments} />;
}
