export class SuccessResponse {
    data: any;
    message: string;
    statusCode: number;

    constructor(data: any = {}, message = "providing response successfully", status = 200) {
        this.data = data;
        this.message = message;
        this.statusCode = status;    
    }
}