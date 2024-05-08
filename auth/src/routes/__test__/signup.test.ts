import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);
});
it(' retruns a 400 with an invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'testtestcom',
      password: 'password',
    })
    .expect(400);
});
it(' retruns a 400 with an invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'testtestcom',
      password: 'pas',
    })
    .expect(400);
});
it(' retruns a 400 with an missing email and  password', async () => {
  await request(app).post('/api/users/signup').send({}).expect(400);
});
it(' cant have duplicate email  ', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(400);
});

// it('set a cookie after sucessfull signup', async () => {
//   const response = await request(app)
//     .post('/api/users/signup')
//     .send({
//       email: 'test@test.com',
//       password: 'password',
//     })
//     .expect(201);
//   expect(response.get('Set-Cookie')).toBeDefined();
// });
