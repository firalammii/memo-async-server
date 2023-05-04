import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    creator: {},
    title: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    tags: [],
    likes: {
        type: Number,
        default: 0
    },
    // likes: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'users'
    //     }
    // ],
    date: {
        type: Date,
        default: new Date()
    },
    publicPost: {
        type: Boolean,
        default: false
    },
    postPic: String,
});

const PostsModel = mongoose.model('posts', postSchema);

export default PostsModel;