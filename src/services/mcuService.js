'use scrict'
const axios = require('axios');

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
    let url = "http://192.168.0.4/text?data=running";
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