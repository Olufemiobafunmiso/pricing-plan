import request from 'supertest';
import app from '../../app';


describe('ERROR TEST', () => {

  it('should respond with a 404', async () => {
    const response = await request(app).get('/invalid-endpoint');
    expect(response.status).toEqual(404);
  });

  it('should respond with a 400 and return "plan must be one of [starter, advanced, enterprise]" if incorrect plan is passed', async () => {
    const response = await request(app).get('/v1/pricing?plans=oba');
    expect(response.status).toEqual(400);
    expect(response.body.message).toEqual('plan must be one of [starter, advanced, enterprise]');
  });

});

describe('VALID TEST', () => {
  it('should respond with a 200', async () => {
    const response = await request(app).get('/v1/pricing');
    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual('Pricing sucessfully fetched');
    expect(response.body.data).toHaveProperty('tiers');
  });

  it('should respond with a 200 and return starter object only', async () => {
    const response = await request(app).get('/v1/pricing?plans=starter');
    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual('Pricing sucessfully fetched');
    expect(response.body.data[0]).toHaveProperty('starter');
  });

  it('should respond with a 200 and return starter object and advanced object only', async () => {
    const response = await request(app).get('/v1/pricing?plans=starter,advanced');
    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual('Pricing sucessfully fetched');
    expect(response.body.data[1]).toHaveProperty('advanced');
  });

  it('should respond with a 200 and return starter object and advanced object only', async () => {
    const response = await request(app).get('/v1/pricing?plans=starter,advanced,enterprise');
    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual('Pricing sucessfully fetched');
    expect(response.body.data[0]).toHaveProperty('starter');
    expect(response.body.data[1]).toHaveProperty('advanced');
    expect(response.body.data[2]).toHaveProperty('enterprise');
  });
});
