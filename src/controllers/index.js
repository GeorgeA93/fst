import express from 'express';
import root from './root';
import interview from './interview';
import posts from './posts';
import cars from './cars';

const router = express.Router();

router.use('/', root);
router.use('/interview', interview);
router.use('/posts', posts);
router.use('/cars', cars);

export default router;
