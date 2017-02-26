import express from 'express';
import { Car } from '../models';

const router = express.Router();

router.get('/', (req, res) => {
    const start = req.query.start;
    const limit = req.query.limit;
    res.status(200).json(Car.getAll(start, limit));
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const car = Car.getOne(id);
    if (!car) {
        res.status(404).end(`Car with id: ${id} not found`);
    }
    res.status(200).json(car);
});

router.post('/', (req, res) => {
    const carToCreate = req.body;
    if (!carToCreate) {
        res.status(500).end('Please supply a car to create');
    } else {
        const created = Car.create(carToCreate);
        if (!created) {
            res.status(500).end();
        }
        res.status(201).json(created);
    }
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const newCar = req.body;
    if (!newCar) {
        res.status(500).end('Please supply a new car value');
    } else {
        const updated = Car.update(id, newCar);
        if (!updated) {
            res.status(204).end();
        }
        res.status(200).json(updated);
    }
});

router.delete('/:id', (req, res) => {
    const deleteResult = Car.delete(req.params.id);
    if (deleteResult) {
        res.status(200).end();
    }
    res.status(204).end();
});

export default router;
