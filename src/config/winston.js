const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp}) => {
    return `${timestamp} [${level}]: ${message}`;
});

// define the custom settings for each transport (file, console)
var options = {
    console: {
        level: process.env.NODE_ENV=='production' ? 'info' : 'debug',
        handleExceptions: true,
        exitOnError: false,     
        json: false,
        colorize: true,
        humanReadableUnhandledException: true
    }
};

// instantiate a new Winston Logger with the settings defined above
const logger = createLogger({
    handleExceptions: true,
    exitOnError: false,     
    format: combine(
        format.splat(),
        timestamp(),
        myFormat
    ),
    transports: [
        new transports.Console(options.console)
    ],
});

module.exports = logger;
