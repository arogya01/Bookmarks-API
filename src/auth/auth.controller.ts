import { AuthService } from './auth.service';
import { Controller, Post } from '@nestjs/common';

// this creates a new controller with the path /auth
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  signup() {
    return this.authService.signup();
  }
  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
