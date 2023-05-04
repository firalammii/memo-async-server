import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true
    },
    pp: {
        type: String,
        required: true
    },
    pwd: {
        type: String,
        required: true
    },

});

const UsersModel = mongoose.model('users', userSchema);

export default UsersModel;