export function finishSuperTest(done) {
    return (err) => {
        if (err) {
            done.fail(err);
        } else {
            done();
        }
    };
}
