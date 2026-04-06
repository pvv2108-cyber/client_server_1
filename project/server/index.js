const express = require('express');
const app = express();

let users = [
  { id: 1, name: 'Паша', email: 'пашакрут@mail.com' },
  { id: 2, name: 'Маша', email: 'маша_хороша@mail.com' }
];

app.get('/users', (req, res) => {          // GET
  res.send(users);
});

app.post('/users', (req, res) => {        // POST
  const newUser = {
    id: Date.now(),
    name: req.body.name,
    email: req.body.email
  };

  users.push(newUser);
  res.json(newUser);
});

app.listen(5000);