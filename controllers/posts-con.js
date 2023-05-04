import PostsModel from "../models/posts-model.js";

export const fetchPosts = (req, res) => {
    console.log('fetching posts...');
    PostsModel.find({})
        .then(posts => res.status(200).json(posts))
        .catch(error => {
            console.log(error.message);
            res.status(400).json(error);
        });
};

export const createPost = (req, res) => {
    console.log('creating post...');
    const postData = new PostsModel(req.body);
    postData.save()
        .then(post => res.status(200).json(post))
        .catch(error => {
            console.log(error.message);
            res.status(400).json(error);
        });
};

export const updatePost = (req, res) => {
    console.log('updating post...');
    const { id } = req.params;
    const npost = req.body;
    PostsModel.findByIdAndUpdate(id, npost, { new: true })
        .then(post => res.status(200).json(post))
        .catch(error => {
            console.log(error.message);
            res.status(400).json(error);
        });
};

export const deletePost = (req, res) => {
    console.log('deleting post...');
    const { id } = req.params;
    PostsModel.findByIdAndRemove(id)
        .then(post => res.status(200).json(post))
        .catch(error => {
            console.log(error.message);
            res.status(400).json(error);
        });
};