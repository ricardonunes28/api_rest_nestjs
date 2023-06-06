import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './users.repository';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DataSource } from 'typeorm';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository]), PassportModule],
  providers: [UsersService, UserRepository],
  exports: [],
  controllers: [UsersController],
})
export class UsersModule {
  constructor(private dataSource: DataSource) {}
}
