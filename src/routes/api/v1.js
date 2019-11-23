const nodemcuActions = require('../../controllers/mcuController');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).send({
        version: '1.0.0'
    });
});

router.use('/mcu', nodemcuActions);
module.exports = router;