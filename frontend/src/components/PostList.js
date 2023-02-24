import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../features/posts/postslice";

function PostList() {
    const [filter, setFilter] = useState('')
    //redux
    const postList = useSelector((state) => state.posts)
    const dispatch = useDispatch()

    const handleDelete = async (id) => {
        await fetch(`http://localhost:4000/posts/${id}`, {
            method: 'DELETE'
        });

        dispatch(deletePost(id))

    }

    const filterHandler = (e) => {
        setFilter(e.target.value);
    }

    const filteredPosts = postList.filter((names) => names.postname.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div className="posts-list">
            <form >
                <input type="text" onChange={filterHandler} placeholder="Filter Posts" />
            </form>
            <div className="posts">
                <h3 className="name">Name</h3>
                <h3 className="description">Description</h3>
                <h3>Action</h3>
            </div>
            <ul>
                {filteredPosts.map((post) => (
                    <div key={post.id} className="posts">
                        <p className="name">{post.postname}</p>
                        <p className="description">{post.postdescription}</p>
                        <button onClick={() => handleDelete(post.id)}>Delete</button>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default PostList;
