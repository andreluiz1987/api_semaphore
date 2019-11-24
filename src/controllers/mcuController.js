'use scrict'
const express = require('express');
const router = express.Router();
const mqtt = require('mqtt');

const mqtt_url = process.env.CLOUDMQTT_URL || '';
const topic = process.env.CLOUDMQTT_TOPIC || '';
const client = mqtt.connect(mqtt_url);

client.on('connect', function() {

    router.post('/actions/success', function(req, res) {
        client.publish(topic, "success", function() {
            res.writeHead(204, { 'Connection': 'keep-alive' });
            res.end();
        });
    });

    router.post('/actions/running', function(req, res) {
        client.publish(topic, "running", function() {
            res.writeHead(204, { 'Connection': 'keep-alive' });
            res.end();
        });
    });

    router.post('/actions/failed', function(req, res) {
        client.publish(topic, "failed", function() {
            res.writeHead(204, { 'Connection': 'keep-alive' });
            res.end();
        });
    });
});

// router.post('/actions/success', service.buildSuccess);
// router.post('/actions/running', service.buildRunning);
// router.post('/actions/failed', service.buildFailed);

module.exports = router;
