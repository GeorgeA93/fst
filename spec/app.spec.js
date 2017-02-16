import request from 'supertest';
import server from '../src/app';
import { finishSuperTest } from './helpers/finish-super-test';

describe('loading express', () => {
    it('responds to /', (done) => {
        request(server)
            .get('/')
            .expect(200, finishSuperTest(done));
    });
    it('404s everything else', (done) => {
        request(server)
            .get('/foo/bar')
            .expect(404, finishSuperTest(done));
    });
});
