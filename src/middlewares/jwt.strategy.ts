import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = GqlExecutionContext.create(context);
    const query = ctx.getInfo().fieldName;
    if (query == 'institutions' || query == 'signIn') return next.handle();
    const request = ctx.getContext().req;
    const token = request.headers['authorization'];
    const decoded = jwt.verify(token, process.env.SECRET);
    let args = ctx.getArgByIndex(1);
    args.id_institution = String(decoded.id_institution);
    return next.handle();
  }
}
