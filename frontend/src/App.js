import PostForm from './components/PostForm';
import './App.css';
import { useEffect } from 'react';
import PostList from './components/PostList';
import { useDispatch } from 'react-redux';
import { initPost } from './features/posts/postslice';

function App() {

  //const [posts, setPosts] = useState([])
  const dispatch = useDispatch()
  const loadPosts = async () => {
    const response = await fetch("http://localhost:4000/posts")
    const data = await response.json()
    dispatch(initPost(data))
  }

  useEffect(() => {
    loadPosts()
  }, [])

  return (
    <div className="App">
      <h1> POST MANAGER</h1>
      <PostList />
      <PostForm />
    </div>
  );
}

export default App;
