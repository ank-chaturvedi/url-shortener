export class ApiError extends Error {
  message: string;
  status: number;
  errors?: any[];

  constructor(message: string, status: number, errors?: any[]) {
    super(message);
    this.message = message;
    this.status = status;
    this.errors = errors;
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string) {
    super(message, 404);
  }
}

export class ValidationError extends ApiError {
  constructor(errors: any) {
    super("Bad Request", 400, errors);
  }
}
