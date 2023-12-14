const User = require("../models/user");
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET || "defaultSecretKey";

const generateToken = (user) => {
  return jwt.sign({ id: user.id }, secretKey, { expiresIn: "24h" });
};

exports.signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const users = await User.findOne({ username });

    if (!users) {
      return res.status(401).send({ error: "Login failed! User not found." });
    }

    if (password !== users.password) {
      return res
        .status(401)
        .send({ error: "Login failed! Incorrect password." });
    }

    const token = generateToken(users);

    res
      .status(200)
      .send({ message: "Login successful!", user: users, token: token });
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

exports.signOut = (req, res) => {
  res.send({ message: "Logout successful. Please remove token from storage." });
};
