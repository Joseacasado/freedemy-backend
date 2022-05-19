const rateLimit = require('express-rate-limit')
const appName = require('../../package.json').name

//  See documentation: https://www.npmjs.com/package/express-rate-limit

function createRateLimiter({ windowMs, max, message}) {
    return rateLimit({
        windowMs,
        max,
        message,
        requestPropertyName: appName    // The name of the property on the Express request object to store the rate limit info.
    })
}

const rateLimiter = createRateLimiter({
    windowMs: 15 * 60 * 1000,       // 15 minutes (in milliseconds)
    max: 100,                       // Limit each IP to N requests per `window` (here, per 15 minutes)
    message: 'Too Many Requests.',
})

//  TO-DO 
//  export createRateLimiter as default
//  export defaultRateLimiter as constant

module.exports = rateLimiter


/*
 *  If you are behind a proxy/load balancer (usually the case with most hosting services, e.g. Heroku, Bluemix, AWS ELB, Nginx, Cloudflare, 
    Akamai, Fastly, Firebase Hosting, Rackspace LB, Riverbed Stingray, etc.), the IP address of the request might be the IP of the load 
    balancer/reverse proxy (making the rate limiter effectively a global one and blocking all requests once the limit is reached) or undefined. 
    To solve this issue, add the following line to your code (right after you create the express application)

    app.set('trust proxy', numberOfProxies)

    Where numberOfProxies is the number of proxies between the user and the server. 
    To find the correct number, create a test endpoint that returns the client IP:

    app.set('trust proxy', 1)
    app.get('/ip', (request, response) => response.send(request.ip))
*/