import React from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const { id } = useParams();
  const post = { id, title: `Post ${id}`, content: `This is the content of post ${id}.` };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;