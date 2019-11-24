'use scrict'
const axios = require('axios');var mqtt = require('mqtt');

const mqtt_url = process.env.CLOUDMQTT_URL || '';
const topic = process.env.CLOUDMQTT_TOPIC || '';
const client = mqtt.connect(mqtt_url);

exports.buildSuccess = async (req, res, next) => {
    client.on('connect', function() {
        client.publish(topic, "success", function() {
            res.writeHead(204, { 'Connection': 'keep-alive' });
            res.end();
        });
    });
};

exports.buildRunning = async (req, res, next) => {
    const client = mqtt.connect(mqtt_url);
    client.on('connect', function() {
        client.publish(topic, "running", function() {
            res.writeHead(204, { 'Connection': 'keep-alive' });
            res.end();
        });
    });
};

exports.buildFailed = async (req, res, next) => {
    const client = mqtt.connect(mqtt_url);
    client.on('connect', function() {
        client.publish(topic, "failed", function() {
            res.writeHead(204, { 'Connection': 'keep-alive' });
            res.end();
        });
    });
};