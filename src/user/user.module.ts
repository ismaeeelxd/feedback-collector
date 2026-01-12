import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { NotifierModule } from 'src/notifier/notifier.module';

@Module({
  imports: [NotifierModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
