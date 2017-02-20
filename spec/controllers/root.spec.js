import request from 'supertest';
import server from '../../src/app';
import { finishSuperTest } from '../helpers/finish-super-test';

describe('root resource', () => {
    it('responds to /', (done) => {
        request(server)
            .get('/')
            .expect(200, finishSuperTest(done));
    });
});
