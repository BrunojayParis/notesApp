import { posts } from "../models/posts.js";

export const getPosts = async (req, res) => {
    try {
        const allPosts = await posts.findAll();
        res.json(allPosts);
    } catch (error) {
        res.json({ error: error.message })
    }

}

export const createPost = async (req, res) => {
    const { postname, postdescription } = req.body;

    try {
        const newPost = await posts.create({
            postname,
            postdescription
        })

        res.json(newPost)
        
    } catch (error) {
        res.json({ error: error.message })
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        await posts.destroy({
            where: {
                id,
            }
        })

        return res.sendStatus(204);
    } catch (error) {
        res.json({ error: error.message })
    }

}
