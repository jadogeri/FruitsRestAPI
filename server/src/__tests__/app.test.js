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

   // console.log(JSON.stringify(res))
    expect(res.statusCode).toEqual(400);
  });


  it('logs user into app', async () => {
    const stringUser = getMockData();
    const mockUser = JSON.parse(stringUser);

    const res = await request("https://fruitsrestapi.onrender.com"

    )
      .post('/api/user/login')
      .send({ username : mockUser.username, password : mockUser.password});
    data = ((res._body))
    //console.log("response object ====================",JSON.stringify(res))
    const {token} = data
    //console.log(" token === ",data, typeof token)
    //console.log("mockuser === ",JSON.stringify(mockUser))
    const User = {...mockUser, token : token};
    //console.log("mockUser After Update and merge =============",JSON.stringify(User))
    localStorage.removeItem("mock");
    localStorage.setItem("mock",JSON.stringify(User, null, 2))

    expect(res.statusCode).toEqual(200);
    // expect(res.body).toEqual('you need to pass a firstName');
  })
  
  it('logout user', async () => {
    let mock = getMockData();
    console.log("mock in logout =====,", mock,typeof mock)
    let mockObj = JSON.parse(mock)
    let {token, username} = mockObj
    const res = await request("https://fruitsrestapi.onrender.com").post('/api/user/logout').send({token : token, username: username});
  
    //console.log(JSON.stringify(res))
    expect(res.statusCode).toEqual(200);
  })
  
  
});