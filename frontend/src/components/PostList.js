import { useState } from "react";

function PostList(props) {
    const[filter, setFilter]=useState('')

    const postList = props.posts
    const handleDelete = async(id)=>{
        await fetch(`http://localhost:4000/posts/${id}`,{
            method: 'DELETE' 
        });
        props.setPosts(postList.filter((post)=> post.id !== id))

    }
    const filterHandler= (e) => {
        setFilter(e.target.value);
    }

    const filteredPosts = postList.filter((post)=> post.postname.toLowerCase().includes(filter.toLowerCase())) 


    return (
      <div className="posts-list">
        <form >
            <input type="text" onChange={filterHandler} placeholder="Filter Posts" />
        </form>
        <div className="posts">
            <h3 className="name">name</h3>
            <h3 className="description">description</h3>
            <h3>action</h3>
        </div>
        {filteredPosts.map((post)=> (
            <div key={post.id} className="posts">
                <p className="name">{post.postname}</p>
                <p className="description">{post.postdescription}</p>
                <button onClick={()=>handleDelete(post.id)}>Delete</button>
            </div>
        ))}
      </div>
    );
  }
  
  export default PostList;
  