// Generic error handler used for catching and responding to errors
const genericErrorHandler = (err, req, res, next) => {
    console.error(err);  // Log the error for debugging purposes

    if (res.headersSent) {
        return next(err);
    }

    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'An unexpected error occurred.',
    });
};

// 404 Not Found error handler
const notFoundHandler = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'Resource not found'
    });
};

// Specific middleware to catch asynchronous errors and pass them to next()
// This avoids having to explicitly use try-catch in each controller
const catchAsyncErrors = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

module.exports = {
    genericErrorHandler,
    notFoundHandler,
    catchAsyncErrors
};

