const request = require('supertest');
const app = require('../../src/app');

describe('Health Endpoint Integration Test', () => {
  it('should return a healthy status with a 200 status code', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: 'OK',
      message: 'Service is healthy'
    });
  });
});
