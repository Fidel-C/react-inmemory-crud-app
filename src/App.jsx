import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PostList from './components/PostList';
import AddPost from './components/AddPost';
function App() {
  const [posts, setPosts] = useState( [
  {
    title: "First Post",
    id: 1,
    body: "This is the body of the first post."
  },
  {
    title: "Second Post",
    id: 2,
    body: "Here is the body content for the second post."
  },
  {
    title: "Third Post",
    id: 3,
    body: "The third post has its own unique body text."
  },
  {
    title: "Fourth Post",
    id: 4,
    body: "This is the body for the fourth post. Each post has distinct information."
  },
  {
    title: "Fifth post",
    id: 5,
    body: "Fifth post comes with its own body text. These posts can be used in various scenarios."
  }
]);

  
  const addPost = (title,text) => {
    let newPost = {
      id: posts.length + 1,
      title:title,
      body: text,
    }
    let newposts = [newPost,...posts.reverse()]
    setPosts(newposts);
  
}

  
    
  const editPost = (title,text,id) => {
    let newPosts = posts.map((item) => {
      return item.id==id?{...item,body:text,title:title}:item
    })
    setPosts(newPosts);
}

  return (
<div className="bg-grey p-3 mt-5 pt-5">

       <PostList posts={posts} editPost={editPost} />

      <AddPost addPost={addPost}  />



    </div>
 
  )
}

export default App
