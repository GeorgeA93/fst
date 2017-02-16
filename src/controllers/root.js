import express from 'express';
import { root } from '../models';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('root', root);
});

export default router;
