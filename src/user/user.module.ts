import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { NotifierModule } from 'src/notifier/notifier.module';
import { AuthenticationModule } from 'src/authentication/authentication.module';

@Module({
  imports: [NotifierModule, AuthenticationModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
