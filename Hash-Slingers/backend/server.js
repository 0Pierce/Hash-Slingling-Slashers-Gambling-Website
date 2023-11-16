
const express = require('express')
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const app = express()

const userController = require('./controllers/userController');



mongoose.connect('mongodb-connection-Replace', {
    userNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error(err));

app.use(express.json());

app.use("/api", userRoutes);

app.listen(5000, ()=>{console.log("Live on port 5000")} );



