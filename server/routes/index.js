import express from 'express';
import auth from './auth';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('<h1>Welcome To The HackerBay Backend Application</h1>');
});

router.use('/login', auth);

router.all('*', (req, res) => res.status(404).send({
  status: 'error',
  message: 'you have entered an incorrect route',
}));

export default router;
