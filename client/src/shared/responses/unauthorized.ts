import { SweetAlertResult } from 'sweetalert2';
import BaseResponse from './base';

const defaultMessage = 'No cuentas con los permisos suficientes para realizar esta acción';

export default class UnauthorizedError implements BaseResponse {
  statusCode = 401;

  message: string;

  success = false;

  swal: Alert;

  constructor(swal: Alert, message?: string) {
    this.message = message || defaultMessage;
    this.swal = swal;
  }

  async alert(): Promise<SweetAlertResult> {
    const response = await this.swal.fire({
      title: 'Error!',
      text: this.message,
      icon: 'error',
    });
    return response;
  }
}
