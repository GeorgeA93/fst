import express from 'express';
import morgan from 'morgan';
import sampleMiddleware from './middlewares/sample';
import controllers from './controllers';

function setupServer() {
    const app = express();

    app.use(express.static(`${__dirname}/public`)); // setup the public (assets) directory

    // setup the rendering engine
    app.set('views', `${__dirname}/views`);
    app.set('view engine', 'pug');

    // attach third party middleware
    app.use(morgan('tiny'));

    // attach our middleware
    app.use(sampleMiddleware);

    // add our controllers
    app.use(controllers);

    // the base route
    app.get('/', (req, res) => {
        res.render('index', { title: 'FST', message: 'Go Cardless Interview Boilerplate!' });
    });

    // start listening on port 3000
    return app.listen(3000, () => {
        console.log('Listening on port 3000...');
    });
}

const server = setupServer();

export default server;
