const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let users = [];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const { first_name, last_name } = req.body;
    if (!first_name || !last_name) {
        return res.status(400).json({ error: 'First name and last name are required' });
    }
    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,  // Ensure unique ID
        first_name,
        last_name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(PORT, () => console.log(`Running on ${PORT}`));
