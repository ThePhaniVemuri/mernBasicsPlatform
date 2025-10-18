function asyncHandler(requestHandler) {
    return function (req, res, next) {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}

// OR

const asyncHandler = (requestHandler) => async (req, res, next) => { //this is a higher order function.
    try {
        await requestHandler(req, res, next);
    }
    catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
};