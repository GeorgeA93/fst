import express from 'express';
import { isEmpty } from 'lodash';
import { Post } from '../models';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(Post.getAll());
});

router.get('/:id', (req, res) => {
    const post = Post.getOne(req.params.id);
    if (post) {
        res.status(200).json(post);
    } else {
        res.status(404).end('Post not found');
    }
});

router.post('/', (req, res) => {
    if (!req.body || isEmpty(req.body)) {
        res.status(500).end('You must supply a post in the body');
    } else {
        const created = Post.create(req.body);
        if (!created) {
            res.status(500).end('Failed to create post');
        } else {
            res.status(201).json(created);
        }
    }
});

router.put('/:id', (req, res) => {
    if (!req.body || isEmpty(req.body)) {
        res.status(500).end('You must supply a post to update in the body');
    } else {
        const updated = Post.update(req.params.id, req.body);
        if (!updated) {
            res.status(204).end('Post to update not found');
        } else {
            res.status(200).json(updated);
        }
    }
});

router.delete('/:id', (req, res) => {
    const deleted = Post.delete(req.params.id);
    if (!deleted) {
        res.status(204).end('Post to delete not found');
    } else {
        res.status(200).end();
    }
});

export default router;
