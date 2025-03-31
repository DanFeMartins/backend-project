import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
  
    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }
  
    return user;
  }
  
  async deleteOne(id: number) {
    try{
      return await this.prisma.user.delete(
        {
          where: {id},
        });
    }catch(error){
      throw new NotFoundException(`usuario com o id: ${id} nao encontrado`)
    }
  }

  async updateOne(id: number, data:UpdateUserDto){
    try{ 
    return await this.prisma.user.update(
      {
        where: {id},
        data: data,
      });
    }catch(error){
      throw new NotFoundException(`usuario com id ${id} nao encontrado`)
    }
  }



}
