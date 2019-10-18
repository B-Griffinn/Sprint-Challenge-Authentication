// Imports Needed - supertest + authRouter
const request = require('supertest');
const server = require('../api/server');

// REGISTER TEST

describe('POST /', () => {
    // sohuld return http status 200
    it('should return 200 http status code', async () => {

        const call = await request(server)
        .get('/api/auth/')
        // console.log(call)
        expect(call.status).toBe(200);
    });

    // should return json
    it('should return json', async () => {
        const response = await request(server).post('/api/auth/');
        // tomatch uses a regular expression the check the value
        expect(response.type).toMatch(/json/i);
    })
});


// LOGIN TEST

describe('POST /login', () => {
    // sohuld return http status 200
    it('should return 200 http status code', () => {
        return request(auth)
        .post('/login')
        .then(response => {
            expect(response.status).toBe(200);
        })
        .catch()
    });

    // should return json
    test('should return json', async () => {
        const response = await request(auth).post('/login');
        // tomatch uses a regular expression the check the value
        expect(response.type).toMatch(/json/i);
    })
});