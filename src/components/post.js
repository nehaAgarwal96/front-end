import React, { useEffect, useState } from "react";

const Post = props => {
  const [post, setPost] = useState(props.post)

  const submit = e => {
    e.preventDefault()
    fetch('https://posts_app.nehaagarwal121.workers.dev/posts', {
      method: 'POST',
      body: JSON.stringify({ post }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.text())
  }

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        name="post[title]"
        value={post.title}
        onChange={e => setPost({ ...post, title: e.target.value })}
      />
      {post.errors.title && <p>{post.errors.title}</p>}

      <input
        type="text"
        name="post[username]"
        value={post.username}
        onChange={e => setPost({ ...post, username: e.target.value })}
      />
      {post.errors.username && <p>{post.errors.username}</p>}

      <input
        type="text"
        name="post[content]"
        value={post.content}
        onChange={e => setPost({ ...post, content: e.target.value })}
      />
      {post.errors.content && <p>{post.errors.content}</p>}

      <input type="submit" name="Create Post" />
    </form>
  )
}

export default Post;