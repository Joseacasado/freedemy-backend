'use strict';
const swaggerJSDoc = require('swagger-jsdoc');
const config = require('config');
const appConfig = config.get('api');
const options = {
    swaggerDefinition: {
        "info": {
            "title": appConfig.swagger.title ,
            "version": appConfig.swagger.version
        },
        responses: {
            '200': {
                description: "Bad request. User ID must be an integer and larger than 0."
            },
            '400': {
                description: "Authorization information is missing or invalid."
            }

        },
        "securityDefinitions": {
            "access_token": {
                "type": "apiKey",
                "name": "x-access-token",
                "in": "header"
            }
             ,
             "tcs-api-key": {
                 "type": "apiKey",
                 "name": "X-API-Key",
                 "in": "header"
             }
        },
        "security": [
            {
                "access_token": [],
                "tcs-api-key": []
            }
        ]
    },

    "apis": ['./routes/*.js'] // Path to the API docs

};

module.exports = {

    init: (app) => {

        const swaggerSpec = swaggerJSDoc(options);

        app.get('/api-docs.json', (req, res) => {
            res.setHeader('Content-Type', 'application/json');
            res.send(swaggerSpec);
        });

        return swaggerSpec;
    }


};
