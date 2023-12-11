import { Request, Response, NextFunction } from "express";

class ErrorMiddleWare {
  public static handleErrors(
    error: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    console.log(error);
    let status = 500;
    let message = "An error occurred";

    // Customed error handling but not used as this is a frontend api and not internal api
    // if (error instanceof BadRequestError) {

    //   status = error.statusCode || 500;
    //   message = error.message;
    // }

    // if (error instanceof NotFoundError) {

    //   status = error.statusCode || 500;
    //   message = error.message;
    // }

    res.status(status).send(message);
  }
}

export default ErrorMiddleWare;
