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