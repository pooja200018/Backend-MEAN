const express = require("express");
const { addUser, getUsers, getUser, updateUser, deleteUser } = require("../handlers/userHandlers");
const router = express.Router();

router.post('/users', async (req, res, next) => {
    try {
        let user = await addUser(req.body);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

router.get('/users', async (req, res, next) => {
    try {
        const users = await getUsers() || {};
        res.send(users);
    } catch (error) {
        next(error);
    }
});

router.get('/users/:id', async (req, res, next) => {
    try {
        const user = await getUser(req.params.id) || {};
        res.send(user);
    } catch (error) {
        next(error);
    }
});

router.put('/users/:id', async (req, res, next) => {
    try {
        const user = await updateUser(req.params.id, req.body) || {};
        res.send(user);
    } catch (error) {
        next(error);
    }
});

router.delete('/users/:id', async (req, res, next) => {
    try {
        const user = await deleteUser(req.params.id) || {};
        res.send(user);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
