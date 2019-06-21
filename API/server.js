const express = require('express');

const user = require('../users/users.model.js');
const server = express();
server.use(express.json());

  server.get("/api", (req, res) => {
       user
      .find()
      .then(user => {
        res.status(200).json(user);
        console.log(user);
      })
      .catch(err => console.log(err));
  });

  server.delete("/api/:id", (req, res) => {
    user
      .destroy(req.params.id)
      .then(deleteduser => {
        if (deleteduser > 0) {
          res.status(200).json(deleteduser);
        } else {
          res.status(404).json({ error: "not found" });
        }
      })
      .catch(err => res.status(500).json({ success: false, err }));
  });

  server.post("/api", (req, res) => {
    user
      .add(req.body)
      .then(user => res.status(200).json(user))
      .catch(err => {
        res.status(500).json({ success: false, err });
        console.log(err);
      });
    });


module.exports = server;