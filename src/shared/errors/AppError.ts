class AppError {
  public readonly status: number;

  public readonly message: string;

  constructor(status = 400, message: string) {
    this.status = status;
    this.message = message;
  }
}

export default AppError;
