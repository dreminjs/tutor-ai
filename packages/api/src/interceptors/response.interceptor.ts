import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';

import { IAPIResponse } from '@tutor-ai/shared-types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<
  T,
  IAPIResponse<T>
> {
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<IAPIResponse<T>> {
    return next.handle().pipe(
      map((data: T) => ({
        data,
      })),
    );
  }
}
