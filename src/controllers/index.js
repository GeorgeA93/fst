import express from 'express';
import interview from './interview';

const router = express.Router();

router.use('/interview', interview);

export default router;
