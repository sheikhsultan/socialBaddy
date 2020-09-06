import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Posts from '../Posts/Posts';

const PostReview = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      <Posts key={post.id} post={post} homePage={false}></Posts>
    </div>
  );
};

export default PostReview;
