const db = require('../data/dbconfig.js');

module.exports = {
    add,
    findById,
    find,
    findBy,
    destroy
};


const table = db("user");

function find() {
  return table.select("name",  "id");
}

function findBy(filter) {
  return table.where(filter);
}

function findById(id) {
  return table.where({ id });
}

function add(user) {
  return table.insert(user).then(ids => {
    const [id] = ids;
    return findById(id);
  });
}

function destroy(id) {
  return table.where(id).del();
}