import { ResponseDto } from "../common/dtos/response.dto";
import { Status } from "../enums/status.enum";

export interface CompanyResponseDto extends ResponseDto {
  companyName: string;
  address: string;
  phone: string;
  status: Status;
  contactEmail: string;
}
