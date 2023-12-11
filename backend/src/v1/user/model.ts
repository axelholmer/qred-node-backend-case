import { Model } from "../common/models/base.model";
import { Status } from "../enums/status.enum";

export interface UserModel extends Model {
  name: string;
  email: string;
  status: Status;
}
