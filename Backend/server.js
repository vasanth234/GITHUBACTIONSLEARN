const express = require('express');
const { Client } = require('pg');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({
    origin:"*"
}));



const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'karna',
    password: 'mypass123',
    database: 'pgdatabase'
});

client.connect()
    .then(() => console.log('connected'))
    .catch((err) => console.log(err));

app.post('/login', (req, res) => {
    const d = req.body;

    console.log(d);

    res.send("done");
});

app.listen(3004, () => {
    console.log('Server running on port 3002');
});