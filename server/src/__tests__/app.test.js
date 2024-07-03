const app = require('../../server');
const request = require('supertest');
const fs = require("fs");


const {getMockData} = require("../utils/getMockData");
const {setMockData} = require("../utils/setMockData");

const list = [1,2,3,4,5,6,7]


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

/**
 * fruits
 * 
 *  */

it('Gets all fruits', async () => {
    let mock = getMockData();
    console.log("mock in logout =====,", mock,typeof mock)
    let mockObj = JSON.parse(mock)
    let {token, username} = mockObj
    const res = await request("https://fruitsrestapi.onrender.com")
                      .get('/api/fruit/getfruits')
                      .set('Authorization',`Bearer ${token}`);
                      
  
    console.log(JSON.stringify(res))
    expect(res.statusCode).toEqual(200);
  })
  


  it('Gets a single fruit', async () => {
    let mock = getMockData();
    console.log("mock in logout =====,", mock,typeof mock)
    let mockObj = JSON.parse(mock)
    let {token, username} = mockObj
    const res = await request("https://fruitsrestapi.onrender.com")
                      .get('/api/fruit/getfruit/1')
                      .set('Authorization',`Bearer ${token}`);
                      
  
    console.log(JSON.stringify(res))
    expect(res.statusCode).toEqual(200);
  })
  
  /**
 * clients
 * 
 *  */
  it('Adds a fruit', async () => {
    let mock = getMockData();
    console.log("mock in logout =====,", mock,typeof mock)
    let mockObj = JSON.parse(mock)
    let {token} = mockObj

    for (let index in list){
        const res = await request("https://fruitsrestapi.onrender.com")
                      .post('/api/client/addfruit')
                      .set('Authorization',`Bearer ${token}`)
                      .send({ id : list[index]});
                      
  
    console.log(JSON.stringify(res))
    expect(res.statusCode).toEqual(200);

    }
    
  })

  it('Gets a client fruit by id', async () => {
    let mock = getMockData();
    console.log("mock in logout =====,", mock,typeof mock)
    let mockObj = JSON.parse(mock)
    let {token} = mockObj
    const res = await request("https://fruitsrestapi.onrender.com")
                      .get('/api/client/getfruit/1')
                      .set('Authorization',`Bearer ${token}`);
                      
  
    console.log(JSON.stringify(res))
    expect(res.statusCode).toEqual(200);
  })

  
  it('Removes a client fruit by id', async () => {
    let mock = getMockData();
    console.log("mock in logout =====,", mock,typeof mock)
    let mockObj = JSON.parse(mock)
    let {token} = mockObj
    const res = await request("https://fruitsrestapi.onrender.com")
                      .delete('/api/client/removefruit/1')
                      .set('Authorization',`Bearer ${token}`);
                      
  
    console.log(JSON.stringify(res))
    expect(res.statusCode).toEqual(200);
  })


  it('Removes all client fruits ', async () => {
    let mock = getMockData();
    console.log("mock in logout =====,", mock,typeof mock)
    let mockObj = JSON.parse(mock)
    let {token} = mockObj
    const res = await request("https://fruitsrestapi.onrender.com")
                      .delete('/api/client/removefruits')
                      .set('Authorization',`Bearer ${token}`);
                      
  
    console.log(JSON.stringify(res))
    expect(res.statusCode).toEqual(200);
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