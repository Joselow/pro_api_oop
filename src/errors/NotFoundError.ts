export class NotFoundError extends Error {
  public statusCode: number

  constructor(message: string, public status = 404, public errors?: any) {
    super(message)
    this.statusCode = status
  }
}