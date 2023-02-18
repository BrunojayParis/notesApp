import PostForm from './components/PostForm';
import './App.css';
import { useEffect, useState} from 'react';
import PostList from './components/PostList';

function App() {

  const [posts, setPosts] = useState([])
  const loadPosts = async ()=>{
    const response = await fetch("http://localhost:4000/posts")
    const data = await response.json()
    setPosts(data)
  }
  useEffect(()=>{
    loadPosts()
  },[])
  return (
    <div className="App">
        <h1> POST MANAGER</h1>
        <PostList posts = {posts} setPosts = {setPosts}/>
        <PostForm posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default App;
