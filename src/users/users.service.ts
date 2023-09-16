import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: User[] = [
    {
      id: 123,
      avatar: 'sadsasd',
      email: 'guille@guille.com',
      first_name: 'sdfsfd',
      last_name: 'sdfsdf',
      password: '123',
    },
  ];
  create(createUserDto: CreateUserDto) {
    const user: User = { ...createUserDto, id: Math.random() };
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const usuerEncontado = this.users.find((user) => user.id === id);
    return usuerEncontado || {};
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
