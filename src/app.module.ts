import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { NotifierModule } from './notifier/notifier.module';
import { AuthenticationModule } from './authentication/authentication.module';
@Module({
  imports: [UserModule, NotifierModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ".env",
  }), AuthenticationModule],
})
export class AppModule { }
