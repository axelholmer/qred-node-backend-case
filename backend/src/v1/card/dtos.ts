import { ResponseDto } from "../common/dtos/response.dto";
import { Currency } from "../enums/currency.enum";
import { Status } from "../enums/status.enum";

export interface CardResponseDto extends ResponseDto {
  cardImageUrl: string;
  currentSpend: number;
  spendLimit: number;
  currency: Currency;
  expirationDate: string;
  status: Status;
  cardNumber: string;
}
