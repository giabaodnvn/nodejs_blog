const newsRouter = require('./news');

function route(app) {
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.use('/news', newsRouter);
    
    app.get('/search', (req, res) => {
        res.render('search');
    });

    app.get('/news', (req, res) => {
        res.render('news');
    });
}

module.exports = router;
