import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../features/posts/postslice";

function PostForm() {

  const [post, setPost] = useState({
    postname: "",
    postdescription: "",
  })//this will be the new post

  const [loading, setLoading] = useState(false) //loading state for the "create" button

  const posts = useSelector((state)=> state.posts)//posts array from redux store
  const dispatch = useDispatch()

  const uniqueName = () => {
    return posts.some((names) => names.postname === post.postname)// unique name validation function
  }

  const handeChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value }) 
  }

  const handleSubmit = async (e) => {
    e.preventDefault();//prevents the page to reload on submit
    const unique = uniqueName()

    if (!unique) {
      setLoading(true)
      const response = await fetch("http://localhost:4000/posts", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post),
      });
      const data = await response.json();
      setLoading(false)

      dispatch(addPost(data))//add post action

      //clear values after submitting
      setPost({
        postname: "",
        postdescription: "",
      })

    } else {
      alert("Post name must be unique")
    }

  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input className="name" type="text" name="postname" placeholder="post name" value={post.postname}  onChange={handeChange} />
        <input className="description" type="text" name="postdescription" placeholder="post description" value={post.postdescription} onChange={handeChange} />
        <input type="submit" value={loading ? "loading..." : "create"} />
      </form>
    </div>
  );
}

export default PostForm;
