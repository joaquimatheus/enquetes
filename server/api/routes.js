function allowCrossDomain(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Expose-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') { return res.sendStatus(200); }
    next();
}

module.exports = (app) => {
    app.use(allowCrossDomain);

    const _get = app.get;
    const _post = app.post;

    app.post = (route) => {
        console.log(`Binding route: {POST} ${route}`);
        return _post.apply(this, arguments);
    };

    app.get = (route) => {
        console.log(`Binding route: {GET} ${route}`);
        return _get.apply(this, arguments);
    };

    require('./endpoints/votes')(app);
    
    app.get = _get;
    app.post = _post;

    app.use((req, res) => {
        res.status(404).json({
            code: 404,
            error: true,
            msg: 'URL not found'
        });
    });

    app.use((err, req, res, next) => {
        console.log(err);
        const statusCode = err.statusCode || 500;

        res.status(statusCode).json({
            error: true,
            code: statusCode,
            msg: err.msg || err.message || err
        });
    });
};
