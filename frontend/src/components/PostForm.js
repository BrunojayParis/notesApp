import { useState } from "react";

function PostForm(props) {
    

    const [post, setPost] = useState({
        postName:"",
        postDescription:"",
      })//this will be the new post
    
    const [loading, setLoading] = useState(false) 

    const uniqueName = ()=>{
      return props.posts.some(names => names.postname.includes(post.postName))
    }

    const handeChange = (e) =>{
      setPost({...post, [e.target.name]:e.target.value})

    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const unique = uniqueName()
        
        if (!unique){
          setLoading(true)
          const response = await fetch("http://localhost:4000/posts",{
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(post),
          });
          const data = await response.json();
          setLoading(false)
  
          props.setPosts([...props.posts, data])
        }else{
          alert("Post name must be unique")
        }

    }
    return (
      <div>
        <form className="form" onSubmit={handleSubmit}>
        <input className="name" type="text" name="postName" placeholder="post name" value={post.postname} onChange={handeChange} />
        <input className="description" type="text" name="postDescription" placeholder="post description" value={post.postdescription} onChange={handeChange}/>
        <input type="submit" value={loading ? "loading..." : "create"} />
        </form>
      </div>
    );
  }
  
  export default PostForm;
  