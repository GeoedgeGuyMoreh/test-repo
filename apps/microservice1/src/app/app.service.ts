import { Injectable } from '@nestjs/common';
import { jwtJwtValidator } from '@geoedge-v2-backend/jwt/jwt-validator';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return ({ message: jwtJwtValidator() });
  }
}
