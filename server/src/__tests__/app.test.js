const app = require('../../server');
const request = require('supertest');

let data = {};

describe('register', () => {
//   it('returns bad request if first name is missing', async () => {
//     const res = await request(app).post('/register').send({ firstName: 'Jan' });

//     expect(res.statusCode).toEqual(201);
//   });

//   it('returns bad request if first name is missing', async () => {
//     const res = await request(app)
//       .post('/register')
//       .send({ somethingElse: 'Jan' });

//     expect(res.statusCode).toEqual(400);
//     expect(res.body).toEqual('you need to pass a firstName');
//   });
  it('logs user into app', async () => {
    const res = await request("https://fruitsrestapi.onrender.com"
      //"http://localhost:4500"

    )
      .post('/api/user/login')
      .send({ username : "x", password : "x"});
    data = ((res._body))
    const {token} = data
    console.log("data in token === ",data, typeof data)
    console.log(" token === ",data, typeof token)

    expect(res.statusCode).toEqual(200);
    // expect(res.body).toEqual('you need to pass a firstName');
  });
});