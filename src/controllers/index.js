import express from 'express';
import root from './root';
import interview from './interview';

const router = express.Router();

router.use('/', root);
router.use('/interview', interview);

export default router;
