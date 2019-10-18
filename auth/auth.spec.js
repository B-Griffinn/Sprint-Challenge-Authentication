// Imports Needed - supertest + authRouter
const request = require('supertest');
const auth = require('./auth-router.js');

// REGISTER TEST

describe('POST /register', () => {
    // sohuld return http status 200
    it('should return 200 http status code', () => {
        return request(auth)
        .post('/register')
        .then(response => {
            expect(response.status).toBe(200);
        })
        .catch()
    });

    // should return json
    test('should return json', async () => {
        const response = await request(auth).post('/register');
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