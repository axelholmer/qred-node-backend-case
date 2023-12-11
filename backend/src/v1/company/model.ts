import { Model } from "../common/models/base.model";
import { Status } from "../enums/status.enum";

export interface CompanyModel extends Model {
  company_name: string;
  user_id: string;
  address: string;
  phone: string;
  status: Status;
  contact_email: string;
}
