module.exports = app => {
    const records = require('../controllers/record-controller');
    const router = require('express').Router();

    router.route('/records')
        .get(records.findAll)
        .post(records.create)

    //router.post('/newRecord', records.create);

    router.get('/records/:recordId', records.findOneById);

    router.post('/testing', records.testing);

    app.use('/api', router);
}