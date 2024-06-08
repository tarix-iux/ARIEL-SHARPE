import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const posts = [
    { id: 1, title: "Post 1", content: "This is the first post." },
    { id: 2, title: "Post 2", content: "This is the second post." }
  ];

  return (
    <div>
        <div className='header'>
            <h1>ARIEL SHARPE</h1>
            <h3>student nerd</h3>
        </div>
      <p>nothing to see yet</p>
      
    </div>
  );
}

export default Home;


/*<ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>*/