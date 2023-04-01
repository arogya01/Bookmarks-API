import { AuthService } from './../auth/auth.service';
import { AuthController } from './../auth/auth.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
