import { CompanyResponseDto } from "./dtos";
import * as CompanyQueries from "./queries";
import { InvoiceResponseDto } from "../invoice/dtos";

export const getCompany = async (
  companyId: string
): Promise<CompanyResponseDto | null> => {
  const company = await CompanyQueries.getCompanyById(companyId);
  if (!company) {
    return null;
  }
  return {
    id: company.id,
    companyName: company.company_name,
    address: company.address,
    phone: company.phone,
    status: company.status,
    contactEmail: company.contact_email,
  };
};

export const getDueInvoices = async (
  companyId: string
): Promise<InvoiceResponseDto[]> => {
  const invoices = await CompanyQueries.getDueInvoices(companyId);

  return invoices.map((invoice) => ({
    id: invoice.id,
    companyId: invoice.company_id,
    dueDate: invoice.due_date,
    amount: invoice.amount,
    currency: invoice.currency,
    paidAt: invoice.paid_at,
  }));
};
