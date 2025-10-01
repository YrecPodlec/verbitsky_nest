import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  // Важно создать репозиторий и передать класс из МОДЕЛИ
  constructor(@InjectModel('User') private userRepository: typeof User) {}
  async createUser(dto: CreateUserDto) {
    return await this.userRepository.create(dto);
  }
  async getAllUsers() {
    return await this.userRepository.findAll();
  }
}
