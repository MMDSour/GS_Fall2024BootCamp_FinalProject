import crypto from 'crypto';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

const role = {
    normal: 0,
    admin: 1
}

const sessions = {}
const users = {}
const products = {}

const generateUserId = function () {
    let id = 2
    return () => id++;
}()

const generateProductId = function () {
    let id = 1
    return () => id++;
}()


users[1] = { username: 'admin', password: 'admin', role: role.admin }
users[2] = {
    id: 2,
    firstName: 'John',
    lastName: 'Doe',
    nationalCode: 1234567890,
    phoneNumber: "09912383937",
    username: 'john_doe',
    password: 'password123',
    role: role.normal,
}
app.post('/api/auth', (req, res) => {
    for (const userId in users) {
        if (users[userId].username === req.body.username && users[userId].password === req.body.password) {
            const sessionId = crypto.randomUUID()
            sessions[sessionId] = { userId: userId };
            res.send(sessionId)
            return
        }
    }

    res.status(400).send('user not found');
});

app.get('/api/users/current', (req, res) => {
    if (!req.headers.authorization) {
        res.status(401).send('authentication is required');
        return
    }

    const session = sessions[req.headers.authorization]
    if (!session) {
        res.status(403).send('session is invalid');
        return
    }

    res.json(users[session.userId])
});

app.post('/api/users', (req, res) => {
    if (!req.headers.authorization) {
        res.status(401).send('authentication is required');
        return
    }

    const session = sessions[req.headers.authorization]
    if (!session) {
        res.status(403).send('session is invalid');
        return
    }

    if (users[session.userId].role !== role.admin) {
        res.status(403).send('user role must be admin');
        return
    }

    const user = {
        id: generateUserId(),
        role: req.body.role,
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        nationalCode: req.body.nationalCode,
        phoneNumber: req.body.phoneNumber
    }

    users[user.id] = user

    res.json(user)
});

app.put('/api/users', (req, res) => {
    if (!req.headers.authorization) {
        res.status(401).send('authentication is required');
        return
    }

    const session = sessions[req.headers.authorization]
    if (!session) {
        res.status(403).send('session is invalid');
        return
    }

    if (users[session.userId].role !== role.admin) {
        res.status(403).send('user role must be admin');
        return
    }

    const user = {
        id: req.body.id,
        role: req.body.role,
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        nationalCode: req.body.nationalCode,
        phoneNumber: req.body.phoneNumber
    }

    users[user.id] = user

    res.json(user)
});

app.get('/api/users', (req, res) => {
    if (!req.headers.authorization) {
        res.status(401).send('authentication is required');
        return
    }

    const session = sessions[req.headers.authorization]
    if (!session) {
        res.status(403).send('session is invalid');
        return
    }

    res.json(users)
});

app.post('/api/products', (req, res) => {
    if (!req.headers.authorization) {
        res.status(401).send('authentication is required');
    }

    const session = sessions[req.headers.authorization]
    if (!session) {
        res.status(403).send('session is invalid');
        return
    }

    const product = {
        id: generateProductId(),
        name: req.body.name,
        code: req.body.code,
        weight: req.body.weight
    }

    products[product.id] = product

    res.json(product)
});

app.put('/api/products', (req, res) => {
    if (!req.headers.authorization) {
        res.status(401).send('authentication is required');
        return
    }

    const session = sessions[req.headers.authorization]
    if (!session) {
        res.status(403).send('session is invalid');
        return
    }

    const product = {
        id: req.body.id,
        name: req.body.name,
        code: req.body.code,
        weight: req.body.weight
    }

    products[product.id] = product

    res.json(product)
});

app.get('/api/products', (req, res) => {
    if (!req.headers.authorization) {
        res.status(401).send('authentication is required');
        return
    }

    const session = sessions[req.headers.authorization]
    if (!session) {
        res.status(403).send('session is invalid');
        return
    }

    res.json(products)
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});