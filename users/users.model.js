const db = require('../data/dbconfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

function insert(user) {
  return db('user')
    .insert(user, 'id')
    .then(ids => {
      return db('user')
        .where({ id: ids[0] })
        .first();
    });
}

async function update(id, changes) {
  return undefined;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('user');
}

function findById(id) {
  return null;
}