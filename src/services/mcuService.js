'use scrict'
const router = express.Router();
const mqtt_url = process.env.CLOUDMQTT_URL || 'mqtt://meclipav:g2ydzGLEva3M@tailor.cloudmqtt.com:15860';
const topic = process.env.CLOUDMQTT_TOPIC || 'esp/test';
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

module.exports = router;