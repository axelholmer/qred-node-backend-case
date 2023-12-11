import { Model } from "../common/models/base.model";
import { Currency } from "../enums/currency.enum";
import { Status } from "../enums/status.enum";

export interface CardModel extends Model {
  company_id: string;
  card_image_url: string;
  current_spend: number;
  spend_limit: number;
  currency: Currency;
  expiration_date: string;
  status: Status;
  card_number: string;
}
