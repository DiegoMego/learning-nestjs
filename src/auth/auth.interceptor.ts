import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { ServerResponse } from "http";
import { Observable, tap } from "rxjs";

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    return next.handle().pipe(
      tap(res => {
        const now = new Date();
        const expiration_date = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
        const response = context.switchToHttp().getResponse<ServerResponse>();
        response.setHeader("Set-Cookie", `refresh_token=${res.refresh_token}; Expires=${expiration_date.toUTCString()}; SameSite=Lax; Secure; HttpOnly`);
      })
    );
  }
  
}