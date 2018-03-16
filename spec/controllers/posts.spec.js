import request from 'supertest';
import server from '../../src/app';
import { finishSuperTest } from '../helpers/finish-super-test';
import { Post } from '../../src/models';

describe('posts resource', () => {
    it('can get all posts', (done) => {
        request(server)
            .get('/posts')
            .expect(200)
            .expect(Post.getAll(), finishSuperTest(done));
    });
    it('can get post by id', (done) => {
        request(server)
            .get('/posts/1')
            .expect(200)
            .expect(Post.getOne(1), finishSuperTest(done));
    });
    it('can create post', (done) => {
        request(server)
            .post('/posts')
            .send(new Post(0, '', '', ''))
            .expect(201, finishSuperTest(done));
    });
    it('cannot create post', (done) => {
        request(server)
            .post('/posts')
            .expect(500, finishSuperTest(done));
    });
    it('can update post', (done) => {
        request(server)
            .put('/posts/1')
            .send(new Post(1, '', '', ''))
            .expect(200, finishSuperTest(done));
    });
    it('cannot find post', (done) => {
        request(server)
            .put('/posts/123')
            .send(new Post(123, '', '', ''))
            .expect(204, finishSuperTest(done));
    });
    it('cannot update post', (done) => {
        request(server)
            .put('/posts/1')
            .expect(500, finishSuperTest(done));
    });
    it('can delete post', (done) => {
        request(server)
            .delete('/posts/1')
            .expect(200, finishSuperTest(done));
    });
    it('cannot delete post', (done) => {
        request(server)
            .delete('/posts/1344')
            .expect(204, finishSuperTest(done));
    });
});
