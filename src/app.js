import express from 'express';

const app = express();

app.use(express.static(__dirname + '/public')); // setup the public (assets) directory

// setup the rendering engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug')
// app.use(require('./middlewares/users')); // wire up any middleware we have
// app.use(require('./controllers')) // wire up any controllers we have

app.get('/', (req, res) => {
    res.render('index', { title: 'FST', message: 'Hello World' });
});

app.get('/api', (req, res) => {
    res.render('index', { title: 'FST-API', message: 'API!' });
});

app.listen(3000, function () {
    console.log('Listening on port 3000...')
});