import UsersModel from "../models/users-model.js";

export const fetchUsers = (req, res) => {
    console.log('fetching users...');
    UsersModel.find({})
        .then(users => res.status(200).json(users))
        .catch(error => {
            console.log(error.message);
            res.status(404).json(error);
        })
};

export const createUser = (req, res) => {
    console.log('creating user...');
    const userData = new UsersModel(req.body);
    userData.save()
        .then(user => res.status(201).json(user))
        .catch(error => {
            console.log(error.message);
            res.status(404).json(error);
        })
};

export const updateUser = (req, res) => {
    console.log('updating user...');
    const { id } = req.params;
    UsersModel.findByIdAndUpdate(id, req.body)
        .then(user => res.status(201).json(user))
        .catch(error => {
            console.log(error.message);
            res.status(404).json(error);
        })
};

export const deleteUser = async (req, res) => {
    console.log('deleting user...');
    const { id } = req.params;
    UsersModel.findByIdAndRemove(id)
        .then(user => res.status(201).json(user))
        .catch(error => {
            console.log(error.message);
            res.status(404).json(error);
        })
};