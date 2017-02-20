import request from 'supertest';
import server from '../../src/app';
import { finishSuperTest } from '../helpers/finish-super-test';
import { interview } from '../../src/models';

describe('interview resource', () => {
    it('can get all', (done) => {
        request(server)
            .get('/interview')
            .expect(200)
            .expect(interview, finishSuperTest(done));
    });
    it('can get by id', (done) => {
        request(server)
            .get('/interview/1')
            .expect(200)
            .expect({ id: 1 }, finishSuperTest(done));
    });
});
