import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
const { expect } = chai;

describe('/login', () => {
  it('should log in successfully', async () => {
    let res;

    try {
      res = await chai.request(app)
        .post('/login').send({
          userName: 'Eazybee',
          password: 'Eazybeee',
        });
    } catch (error) {
      console.error(error);
    }
    // expect(res.body.error.username).to.equal(200);
    expect(res.status).to.equal(200);
    expect(res.body.status).to.equal('success');
  });

  it('should not log in successfully', async () => {
    let res;

    try {
      res = await chai.request(app)
        .post('/login').send({
          userName: 'Eazybee',
          password: '',
        });
    } catch (error) {
      console.error(error);
    }

    expect(res.status).to.equal(400);
    expect(res.body.status).to.equal('error');
    expect(res.body).to.haveOwnProperty('error');
  });
});
