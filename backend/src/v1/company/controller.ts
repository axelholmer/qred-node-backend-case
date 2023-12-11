import { NextFunction, Request, Response } from "express";
import * as ComapanyService from "./service";
import NotFoundError from "../common/errors/not-found.error";
import BadRequestError from "../common/errors/bad-request.error";

interface CompanyRequestParams {
  companyId: string;
}

export const getCompanyById = async (
  req: Request<CompanyRequestParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const companyId = req.params.companyId;
    if (!companyId) {
      throw new BadRequestError("Request params companyId is required");
    }

    const company = await ComapanyService.getCompany(companyId);
    if (!company) {
      throw new NotFoundError("Company not found");
    }
    res.status(200).json(company);
  } catch (error) {
    next(error);
  }
};

export const getCompanyDueInvoices = async (
  req: Request<CompanyRequestParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const companyId = req.params.companyId;
    if (!companyId) {
      throw new BadRequestError("Request params companyId is required");
    }
    const invoices = await ComapanyService.getDueInvoices(companyId);

    res.status(200).json(invoices);
  } catch (error) {
    next(error);
  }
};
