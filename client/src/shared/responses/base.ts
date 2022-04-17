import { SweetAlertResult } from 'sweetalert2';

export default abstract class BaseResponse {
  abstract statusCode: number;

  abstract message: string;

  abstract success: boolean;

  abstract swal: Alert;

  abstract alert(): Promise<SweetAlertResult>;
}
