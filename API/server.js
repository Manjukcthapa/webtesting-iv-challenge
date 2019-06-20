const express = require('express');

const user = require('../users/users.model.js');
const server = express();
server.use(express.json());

server.get('/api', (req, res) => {
    res.status(200).json({ api: 'up' });
  });

  server.get('/api/user', (req, res) => {
    user.getAll()
      .then(user => {
        res.status(200).json(user);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

module.exports = server;