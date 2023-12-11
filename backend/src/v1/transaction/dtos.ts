import { ResponseDto } from "../common/dtos/response.dto";

export interface TransactionResponseDto extends ResponseDto {
  cardId: string;
  transactionDate: string;
  amount: number;
  currency: string;
  description: string;
}
