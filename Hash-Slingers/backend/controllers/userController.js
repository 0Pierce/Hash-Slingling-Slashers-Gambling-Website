const User = require('../models/user');

exports.createUser = async (req, res) => {
    try {
        const user = new user(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
};

exports.signIn = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user || req.body.password !== user.password) {
            return res.status(404).send({ error: 'Login failed!' });
        }

        res.status(200).send({ message: 'Login successful!' });
        
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
};

exports.signOut = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            res.status(500).send({ message: 'Could not log out, try again' });
        } else {
            res.send({ message: 'Logout successful' });
        }
    });
};

exports.listUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        res.status(200).send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        res.status(200).send(user); 
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        res.status(200).send({message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};