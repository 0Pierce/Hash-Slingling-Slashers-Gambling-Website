const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/user', userController.createUser);

router.get('/users', userController.listUsers);

router.get('/users/:id', userController.getUser)

router.put('/user/:id', userController.updateUser);

router.delete('/users/:id', userController.deleteUser);

router.post('/auth/signin', userController.signIn);

router.post('/auth/signout', userController.signOut);

module.exports = router;
