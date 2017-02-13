import request from 'supertest';
import server from '../src/app';
import { finishSuperTest } from './helpers/finish-super-test';

describe('loading express', function () {
    it('responds to /', function (done) {
        request(server)
            .get('/')
            .expect(200, finishSuperTest(done));
    });
    it('404s everything else', function (done) {
        request(server)
            .get('/foo/bar')
            .expect(404, finishSuperTest(done));
    });
})