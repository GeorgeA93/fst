const production = {
    port: 8080,
    corsOptions: {
        origin: 'http://example.com', // only allow example.com
        methods: 'GET', // only allow GET requests
    },
};

export default production;
