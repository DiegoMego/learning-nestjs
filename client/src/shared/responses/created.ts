import { SweetAlertResult } from 'sweetalert2';
import BaseResponse from './base';

const defaultMessage = 'La entidad fue creada exitosamente.';

export default class Created implements BaseResponse {
  statusCode = 200;

  message: string;

  success = true;

  swal: Alert;

  constructor(swal: Alert, message?: string) {
    this.message = message || defaultMessage;
    this.swal = swal;
  }

  async alert(): Promise<SweetAlertResult> {
    const response = await this.swal.fire({
      title: 'Error!',
      text: this.message,
      icon: 'success',
    });
    return response;
  }
}
