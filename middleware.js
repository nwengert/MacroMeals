
const logger = (req, res, next) => {
    console.log( req.method + " " + new Date().toLocaleString());
    next();
}
module.exports = logger;