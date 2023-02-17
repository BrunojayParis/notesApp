const pool = require('../database')

const getPosts = async (req,res)=>{
    try {
        const allPosts = await pool.query("SELECT * FROM post");
        res.json(allPosts.rows);    
    } catch (error) {
        console.log(error.message)    
    }
    
}

const createPost = async(req,res)=>{
    const {postName, postDescription} = req.body;

    try {
        const result = await pool.query(
            "INSERT INTO post (postname, postdescription) VALUES ($1, $2) RETURNING *",
            [postName, postDescription]
        );

        res.json(result.rows[0])
    } catch (error) {
        res.json({error: error.message})
    }
}

const deletePost = async (req,res)=>{
    const {id} = req.params;

    const result = await pool.query("DELETE FROM post WHERE id = $1",[id])

    if(result.rowCount === 0 )
        return res.status(404).json({
            message:"post not found"
        });
    
    return res.sendStatus(204);
}

module.exports = {
    getPosts,
    deletePost,
    createPost
}