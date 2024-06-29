const app = require('../../server');
const request = require('supertest');
const fs = require("fs");


const {getMockData} = require("../utils/getMockData");
const {setMockData} = require("../utils/setMockData");




describe('register', () => {
  setMockData();
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

  it('registers user', async () => {
    let mock = getMockData();
    console.log("mock in get =====,", mock)
    let mockObj = JSON.parse(mock)
    const res = await request("https://fruitsrestapi.onrender.com").post('/api/user/register').send(mockObj);

    console.log(JSON.stringify(res))
    expect(res.statusCode).toEqual(200);
  });


  it('logs user into app', async () => {
//     const mockUser = (getMockData())

// console.log("mock user ===",mockUser)
    const res = await request("https://fruitsrestapi.onrender.com"

    )
      .post('/api/user/login')
      .send({ username : "x", password : "x"});
    data = ((res._body))
    const {token} = data
    console.log("data in token === ",data, typeof data)
    console.log(" token === ",data, typeof token)

    expect(res.statusCode).toEqual(200);
    // expect(res.body).toEqual('you need to pass a firstName');
  }),8000
});