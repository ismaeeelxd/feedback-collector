import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { NotifierModule } from './notifier/notifier.module';
@Module({
  imports: [UserModule, NotifierModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ".env",
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
