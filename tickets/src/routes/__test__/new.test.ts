import request from 'supertest';
import { app } from '../../app';

it(' has a router listen for /api/tickets for post requests ', async () => {
  const response = await request(app).post('/api/tickets').send({});
  expect(response.status).not.toEqual(404);
});
it('can only acessed if the user is authenticated', async () => {
  const res = await request(app).post('/api/tickets').send({});
  expect(res.status).toEqual(401);
});
