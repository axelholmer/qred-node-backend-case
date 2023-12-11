// @ts-nocheck

import { describe, it, expect, vi } from "vitest";
import * as CompanyService from "./service";
import { getCompanyById, getCompanyDueInvoices } from "./controller";
import { NextFunction, Request, Response } from "express";
import NotFoundError from "../common/errors/not-found.error";
import BadRequestError from "../common/errors/bad-request.error";

describe("Company Controller", () => {
  const mockRequest = (params: { companyId?: string }, body = {}) => ({
    params,
    body,
  });

  const mockResponse = () => {
    const res = {};
    res.status = vi.fn().mockReturnValue(res);
    res.json = vi.fn().mockReturnValue(res);
    return res;
  };

  const nextFunction: NextFunction = vi.fn();

  describe("getCompanyById", () => {
    it("should throw BadRequestError if companyId is missing", async () => {
      const req = mockRequest({});
      const res = mockResponse();

      await getCompanyById(
        req as unknown as Request,
        res as unknown as Response,
        nextFunction
      );

      expect(nextFunction).toHaveBeenCalledWith(expect.any(BadRequestError));
    });

    it("should return 200 and company data if company is found", async () => {
      const req = mockRequest({ companyId: "123" });
      const res = mockResponse();
      const mockCompany = {
        id: 1,
        companyName: "Axel Holmer AB",
        address: "Sveavägen 117b",
        phone: "0707780098",
        status: "ACTIVE",
        contactEmail: "contact@axelhomer.com",
      };

      vi.spyOn(CompanyService, "getCompany").mockResolvedValue(mockCompany);

      await getCompanyById(
        req as unknown as Request,
        res as unknown as Response,
        nextFunction
      );

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockCompany);
    });

    it("should throw NotFoundError if company is not found", async () => {
      const req = mockRequest({ companyId: "123" });

      vi.spyOn(CompanyService, "getCompany").mockResolvedValue(null);

      await getCompanyById(
        req as unknown as Request,
        mockResponse() as unknown as Response,
        nextFunction
      );

      expect(nextFunction).toHaveBeenCalledWith(expect.any(NotFoundError));
    });
  });
});
