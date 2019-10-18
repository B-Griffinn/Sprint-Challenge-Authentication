const request = require('supertest');
const userRouter = require('./users-router.js');

describe('GET /', () => {
    // should return http status of 200
    it('should return http status of 200', () => {
        return request(userRouter)
        .get('/')
        .then(response => {
            expect(response.status).toBe(200);
        });
    });
      // should return json
  test('should return JSON', async () => {
    const response = await request(userRouter).get('/');
    // toMatch uses a regular expression to check the value
    expect(response.type).toMatch(/json/i);
  });
})