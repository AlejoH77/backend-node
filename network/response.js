exports.success = function (req, res, message, status) {
    let statusCode = status || 200;
    let statusMessage = message || '';
    res.status(statusCode).send({
        error: false,
        status: status,
        body: statusMessage
    });
}

//se puede poner un valor por defecto en la declaración de la función
exports.error = function (req, res, message = 'Internal server error', status = 500) {
    res.status(status).send({
        error: true,
        status: status,
        body: message
    });
}