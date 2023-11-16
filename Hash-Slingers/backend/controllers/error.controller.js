exports.handleError = (error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'An unexpected error occurred';

    console.error(error);

    res.status(statusCode).send({
        status: 'error',
        message: message,
    });
};

exports.notFound = (req, res, next) => {
    res.status(404).send({
        status: 'error',
        message: 'Not found'
    });
};
