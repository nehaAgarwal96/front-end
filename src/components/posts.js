import React, { useEffect, useState } from "react";


const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = () => {
      fetch('https://posts_app.nehaagarwal121.workers.dev/posts'
        ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'User-Agent': 'LocalTestSystem'
        }
        }
      )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setPosts(myJson)
      });
    };

    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div>
          <h2>
            <p>{post.title}</p>
            <p>{post.username}</p>
            <p>{post.content}</p>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Posts;