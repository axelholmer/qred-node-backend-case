import { NextFunction, Request, Response } from "express";
import * as CardService from "./service";
import NotFoundError from "../common/errors/not-found.error";
import BadRequestError from "../common/errors/bad-request.error";

interface CardRequestParams {
  cardId: string;
}

export const getCardById = async (
  req: Request<CardRequestParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const cardId = req.params.cardId;
    if (!cardId) {
      throw new BadRequestError("Request params cardId is required");
    }

    const card = await CardService.getCard(cardId);
    if (!card) {
      throw new NotFoundError("Card not found");
    }
    res.status(200).json(card);
  } catch (error) {
    next(error);
  }
};

export const getCardsByCompanyId = async (
  req: Request<CardRequestParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const companyId = req.query?.companyId;

    if (typeof companyId !== "string") {
      throw new BadRequestError("Invalid companyId provided");
    }

    const cards = await CardService.getCardsByCompanyId(companyId);

    res.status(200).json(cards);
  } catch (error) {
    next(error);
  }
};

export const getCardTransactions = async (
  req: Request<CardRequestParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const cardId = req.params.cardId;

    if (!cardId) {
      throw new BadRequestError("Request params cardId id is required");
    }
    const transactions = await CardService.getCardTransactions(cardId);

    res.status(200).json(transactions);
  } catch (error) {
    next(error);
  }
};
