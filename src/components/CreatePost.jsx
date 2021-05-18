import axios from 'axios'
import React, { useContext } from 'react';
import { Context } from './Context'


const CreatePost = () => {
  const {baseURL, setPosts, user} = useContext(Context) 
  
  async function addPost (newPost) {
    const url = `${baseURL}/posts`
    const updatedPosts = await axios.post(url, newPost)
    setPosts(updatedPosts.data)
  }

  function postWuphf (e) {
    e.preventDefault()
    const newPost = {
      author: user.username,
      content: e.target.post.value
    }
    console.log(newPost)
    addPost(newPost)
  }

  return (
  <div>
    <form onSubmit={postWuphf}>
    <textarea type='text' name='post' placeholder='Make a new post!'/>
    <button type='submit'>Submit Post</button> 
    </form>
  </div>
  )
}

export default CreatePost;
