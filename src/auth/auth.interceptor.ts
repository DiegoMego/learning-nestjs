import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { ServerResponse } from "http";
import { Observable, tap } from "rxjs";

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    return next.handle().pipe(
      tap(res => {
        const response = context.switchToHttp().getResponse<ServerResponse>();
        response.setHeader("Authorization", `Bearer ${res.access_token}`);
      })
    );
  }
  
}