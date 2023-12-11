import { NextFunction, Request, Response } from "express";
import * as UserService from "./service";
import BadRequestError from "../common/errors/bad-request.error";
import NotFoundError from "../common/errors/not-found.error";

interface GetUserRequestParams {
  userId: string;
}

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (
  req: Request<GetUserRequestParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.params)
    const userId = req.params.userId;

    if (!userId) {
      throw new BadRequestError("Request params userId is required");
    }

    const user = await UserService.getUser(userId);
    if (!user) {
      throw new NotFoundError("User not found");
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
