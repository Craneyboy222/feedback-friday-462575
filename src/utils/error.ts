class AppError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const handleError = (err: AppError, res: any) => {
  const { statusCode, message } = err;
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message
  });
};

export default AppError;