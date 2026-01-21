import { Module } from '@nestjs/common';
import { AuthenticationService } from './services/authentication.service';
import { JwtService } from './services/jwt.service';
import { TOKEN_GENERATOR } from './interfaces/authentication.interface';

const tokenGeneratorProvider = {
  provide: TOKEN_GENERATOR,
  useClass: JwtService,
};

@Module({
  providers: [AuthenticationService, JwtService, tokenGeneratorProvider],
  exports: [AuthenticationService]
})
export class AuthenticationModule { }
