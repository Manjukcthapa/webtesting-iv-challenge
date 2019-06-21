const db = require('../data/dbConfig.js');

const { add } = require('./users.model.js');

describe('users model', () => {
  beforeEach(async () => {
    await db('user').truncate();
  });

  // that process.env.DB_ENV is pointing to 'testing'
  it('should set environment to testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('add()', () => {
    it('should add user', async () => {
        await db('user').truncate();
      await add({ name: 'Matt' });
      await add({ name: 'Raj' });
      await add({ name: 'Manju' });

      const users = await db('user');

      expect(users).toHaveLength(3);
    });

    it('should add the provided user', async () => {
      let user = { name: 'Sam' };
      let inserted = await add(user);
      expect(inserted.name).toBe(user.name);

      user = { name: 'Frodo' };
      inserted = await insert(user);
      expect(inserted.name).toBe(user.name);
    });
  
  });
});
