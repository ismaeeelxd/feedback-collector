import { Body, Controller, Get, Param, Post, Res, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto } from './dtos/register.dto';
import { type Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post("/login")
  async login(@Body() { email }: LoginDto) {
    await this.userService.login(email);
    return { message: "Magic link sent to your email" };
  }

  @Get("/verify/:token")
  async verifyLogin(@Param("token") token: string, @Res({ passthrough: true }) response: Response) {
    try {
      const result = await this.userService.verifyLogin(token);

      response.cookie("sessionToken", result.sessionToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7 * 1000,
      });

      return {
        message: "Login successful",
        email: result.email,
      };

    } catch {
      throw new UnauthorizedException("Invalid or expired token");
    }
  }
}
