'use scrict'
const axios = require('axios');var mqtt = require('mqtt');

const mqtt_url = process.env.CLOUDMQTT_URL || 'mqtt://meclipav:g2ydzGLEva3M@tailor.cloudmqtt.com:15860';
const topic = process.env.CLOUDMQTT_TOPIC || 'esp/test';

exports.buildSuccess = async (req, res, next) => {
    let url = "http://192.168.0.4/text?data=success";
    return axios.post(url)
        .then(response => {
            let code = response.status;
            if (code == 200) {
                res.status(200).send({
                    message: response.data
                });
            }
        })
        .catch(error => {
            //console.log(error);
            res.status(400).send({
                message: "Falha ao registrar build"
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
    // let url = "http://192.168.0.4/text?data=running";
    // return axios.post(url)
    //     .then(response => {
    //         let code = response.status;
    //         if (code == 200) {
    //             res.status(200).send({
    //                 message: response.data
    //             });
    //         }
    //     })
    //     .catch(error => {
    //         //console.log(error);
    //         res.status(400).send({
    //             message: "Falha ao registrar build"
    //         });
    //     });
};

exports.buildFailed = async (req, res, next) => {
    let url = "http://192.168.0.4/text?data=failed";
    return axios.post(url)
        .then(response => {
            let code = response.status;
            if (code == 200) {
                res.status(200).send({
                    message: response.data
                });
            }
        })
        .catch(error => {
            //console.log(error);
            res.status(400).send({
                message: "Falha ao registrar build"
            });
        });
};