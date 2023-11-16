
const express = require('express')
const errorController = require('./controllers/error.controller');
const authController = require('./controllers/auth.controller');

<<<<<<< HEAD
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const app = express()

const userController = require('./controllers/userController');



mongoose.connect('mongodb+srv://hashslinger:password@hash-slinging.qyqsxr4.mongodb.net/?retryWrites=true&w=majority', {
    userNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error(err));

app.use(express.json());

app.use("/api", userRoutes);

app.listen(5000, ()=>{console.log("Live on port 5000")} );



=======
const app = express()

app.get("/api", (req,res)=>{
    res.json({"users":["UserOne", "UserTwo", "UserThree"]})
})


app.listen(5000, ()=>{console.log("Live on port 5000")} );
>>>>>>> origin/main

app.post('/auth/signin', authController.signIn);
app.post('/auth/signout', authController.signOut);

app.use(errorController.notFound);
app.use(errorController.handleError);
