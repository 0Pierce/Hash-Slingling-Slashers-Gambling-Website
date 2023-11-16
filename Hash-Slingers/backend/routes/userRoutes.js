const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/api/user', userController.createUser);

router.get('/api/users', userController.listUsers);

router.get('/api/users/:id', userController.getUser)

router.put('/api/user/:id', userController.updateUser);

router.delete('/api/users/:id', userController.deleteUser);

router.post('/auth/signin', userController.signIn);

router.post('/auth/signout', userController.signOut);

module.exports = router;
