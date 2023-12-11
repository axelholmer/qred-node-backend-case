import { ResponseDto } from "../common/dtos/response.dto";

export interface InvoiceResponseDto extends ResponseDto {
  companyId: string;
  dueDate: string;
  amount: number;
  currency: string;
  paidAt: string | null;
}
