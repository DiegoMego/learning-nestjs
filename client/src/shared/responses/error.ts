import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { HttpStatusCode } from '../constants';
import BaseResponse from './base';
import UnauthorizedError from './unauthorized';

const MySwal = withReactContent(Swal);

export default function Error(statusCode: number, message: string): BaseResponse {
  switch (statusCode) {
    case HttpStatusCode.UNAUTHORIZED:
      return new UnauthorizedError(MySwal, message);
    default:
      return new UnauthorizedError(MySwal, message);
  }
}
