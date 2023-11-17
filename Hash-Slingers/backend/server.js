const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const authController = require('./controllers/auth.controller');
const errorController = require('./controllers/error.controller');

const app = express();

const userController = require('./controllers/userController');

mongoose.connect('mongodb+srv://hashslingers:qKrqjdz1NFQkDGT2@hash-slinging.qyqsxr4.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error(err));

app.use(express.json());

app.use("/api", userRoutes);

app.post('/auth/signin', authController.signIn);
app.post('/auth/signout', authController.signOut);

app.use(errorController.notFound);
app.use(errorController.handleError);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}).on('error', (err) => {
    console.error('Error occurred starting the server:', err);
});
