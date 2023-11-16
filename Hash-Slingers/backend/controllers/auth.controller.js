const User = require('../models/user');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: '24h'
    });
};

exports.signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).send({ error: 'Login failed! User not found.' });
        }

        if (password !== user.password) {
            return res.status(401).send({ error: 'Login failed! Incorrect password.' });
        }

        const token = generateToken(user);

        res.status(200).send({ message: 'Login successful!', user: user, token: token });
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
};

exports.signOut = (req, res) => {
    res.send({ message: 'Logout successful. Please remove token from storage.' });
};
