const postSchema = require('../models/post.js');



const createPost = async (req, res) => {
    try {
        const newPost = await postSchema.create(req.body)
        res.status(201).json({
            newPost
        })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getPost = async (req, res) => {
    try {
        const getPost = await postSchema.find()
        res.status(200).json({
            getPost
        })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}



const getDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const detailPost = await postSchema.findById(id)
        res.status(200).json({
            detailPost
        })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const updatePost = await postSchema.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({
            updatePost
        })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getDelete = async (req, res) => {
    try {
        const { id } = req.params;
        await postSchema.findByIdAndDelete(id)
        res.status(200).json({
            message: "Silme işlemi başarılı..."
        })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// const searchPost = async (req, res) => {
//     const { search, tag } = req.query;
//     try {
//         const title = new RegExp(search, "i")

//         const posts = await postSchema.find({ $or: [{ title }], tag: { $in: tag.split(",") } })


//         res.status(200).json({
//             posts
//         })
//     } catch (error) {
//         return res.status(500).json({ message: error.message })
//     }
// }
// const searchPost = async (req, res) => {

//     try {

//         const { search } = req.query;

//         const posts = await postSchema.find({ $or: [{ search }] })

//         res.json(posts)

//     } catch (error) {
//         return res.status(500).json({ message: error.message })
//     }
// }

module.exports = { createPost, getPost, getDetail, getUpdate, getDelete, searchPost }

