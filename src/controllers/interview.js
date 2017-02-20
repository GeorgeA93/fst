import express from 'express';
import { interview } from '../models';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(interview);
});

router.get('/:id', (req, res) => {
    res.status(200).json(req.params);
});

export default router;
