import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDto } from './dtos/register.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Post("/register")
  async register(@Body() { email }: RegisterDto) {
    this.userService.register(email);
  }


}
