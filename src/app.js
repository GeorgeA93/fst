import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import sampleMiddleware from './middlewares/sample';
import controllers from './controllers';
import environment from './environment';

function setupServer() {
    const app = express();

    app.use(express.static(`${__dirname}/public`)); // setup the public (assets) directory

    // setup the rendering engine
    app.set('views', `${__dirname}/views`);
    app.set('view engine', 'pug');

    // attach third party middleware
    app.use(helmet());
    app.use(morgan('tiny'));
    app.use(cors(environment.corsOptions));

    // attach our middleware
    app.use(sampleMiddleware);

    // add our controllers
    app.use(controllers);

    // start listening on the required port
    return app.listen(environment.port, () => {
        console.log(`Listening on port ${environment.port}...`);
    });
}

const server = setupServer();

export default server;
