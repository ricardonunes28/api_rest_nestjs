import {
  Controller,
  Post,
  ValidationPipe,
  Body,
  Get,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { CredentialsDto } from './dto/credentials.dto';
import { User } from 'src/users/user.entity';
import { GetUser } from './get-user.decorator';
import { JwtAuthGuard } from '../configs/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signup(
    @Body(ValidationPipe) createUserDto: CreateUserDto,
  ): Promise<{ message: string }> {
    await this.authService.signUp(createUserDto);
    return { message: 'Cadastro realizado com sucesso' };
  }

  @Post('/signin')
  async signIn(
    @Body(ValidationPipe) credentiaslsDto: CredentialsDto,
  ): Promise<{ token: string }> {
    return await this.authService.signIn(credentiaslsDto);
  }

  @Get('/me')
  @UseGuards(JwtAuthGuard)
  getMe(@GetUser() user: User): User {
    return user;
  }
}
