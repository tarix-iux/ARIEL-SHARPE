import React from 'react';
import Header from '../components/Header'; 
import NavBar from '../components/NavBar';
import PostGrup from '../components/PostGrup'; 
function Home() {
  const posts = [
    { id: 1, title: "Post 1", content: "This is the first post." },
    { id: 2, title: "Post 2", content: "This is the second post." }
  ];

  return (
    <div>
        <NavBar />
        <Header />
        <PostGrup />
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