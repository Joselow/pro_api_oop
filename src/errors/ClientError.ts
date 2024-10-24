export class ClientError extends Error {
  public statusCode: number

  constructor(message: string, status = 400,  public errors: any,) {
    super(message);
    this.statusCode = status;
  }
}