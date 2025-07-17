class DefaultResponseDTO {
    constructor(statusCode, uri, message, responseBody, timestamp, error) {
        this.statusCode = statusCode;
        this.uri = uri;
        this.message = message;
        this.responseBody = responseBody;
        this.timestamp = timestamp;
        this.error = error;
    }
}

export default DefaultResponseDTO;