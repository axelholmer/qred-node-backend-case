import { ResponseDto } from "../common/dtos/response.dto";
import { Status } from "../enums/status.enum";


export interface UserResponseDto extends ResponseDto {
  name: string;
  email: string;
  status: Status;
}
