import React, { useEffect, useState } from 'react';
import SingleComment from './SingleComment/SingleComment';

const Comments = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${props.commentId}/comments`
    )
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [props.commentId]);

  return (
    <div>
      <h3>Comments</h3>
      <hr />
      {comments.map((comment) => (
        <SingleComment comment={comment} key={comment.id}></SingleComment>
      ))}
    </div>
  );
};

export default Comments;
