const request = require('supertest');
const app = require('../server');

test('returns a respose after login of users', async () => {
  const response = await request(app).get('/login');
  expect(response.status).toBe(200);
 // expect(response.body).toEqual([    { id: 1, name: 'Alice' },    { id: 2, name: 'Bob' },    { id: 3, name: 'Charlie' },  ]);
});