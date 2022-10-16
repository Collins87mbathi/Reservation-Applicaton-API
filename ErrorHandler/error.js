class ApiError {
    constructor(status, message) {
        this.status = status;
        this.message = message;
    }

    static UnAuthorized(message) {
        return new ApiError(401,message);
    }
    static BadRequest(message) {
       return new ApiError(403,message);
    }
    static InternalServerError(message) {
        return new ApiError(404,message);
    }
}

module.exports = ApiError;