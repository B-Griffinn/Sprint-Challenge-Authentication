// Imports Needed - supertest + authRouter
const request = require('supertest');
const server = require('../api/server');
const Users = require('../users/users.model');

// REGISTER TEST

describe('POST /', () => {
    // sohuld return http status 200
    it('should return 200 http status code', async () => {

        const call = await request(server)
        .post('/api/auth/register')
       .send({ username: "hell0001Test", password: "1234" })
        console.log(call.status)
        expect(call.status).toBe(201);
    });

    it('should return 500 http status code', async () => {

        const call = await request(server)
        .post('/api/auth/register')
        console.log(call.status)
        expect(call.status).toBe(500);
    });

});


// LOGIN TEST

describe('POST /login', () => {
    // sohuld return http status 200
    it('should return 200 http status code', async () => {
        const call = await request(server)
        .post('/api/auth/login')
        .send({username: "hell0001Test", password: "1234"})
        expect(call.status).toBe(200)
    });

    it('should return 500 http status code on fail', async () => {
        const call = await request(server)
        .post('/api/auth/login')
        expect(call.status).toBe(500)
    });
});