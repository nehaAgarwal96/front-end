import React, { useEffect, useState } from "react";

const Post = props => {
  const [post, setPost] = useState(props.post)

  const submit = e => {
    console.log(post)
    e.preventDefault()
    fetch('https://posts_app.nehaagarwal121.workers.dev/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: { "Content-Type": "application/json" , "Accept" : "text/html"},
    })
      .then(res => res.text())
  }

  return (
    <form onSubmit={submit}>
      <label>Title :-</label>
      <input
        type="text"
        name="post[title]"      
        onChange={e => setPost({ ...post, title: e.target.value })}
      />
      <br />
      <label>Username :-</label>
      <input
        type="text"
        name="post[username]"
        onChange={e => setPost({ ...post, username: e.target.value })}
      />
      <br />
      <label>Content :-</label>
      <input
        type="text"
        name="post[content]"
        onChange={e => setPost({ ...post, content: e.target.value })}
      />
      <br />
      <input type="submit" name="Create Post" />
    </form>
  )
}

export default Post;