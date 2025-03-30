import { Controller, Post, Body, Get, Patch, ParseIntPipe, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { get } from 'http';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('users')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(){  
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id')id:string){  
    return this.usersService.findOne(Number(id));
  }

  @Delete('delete/:id')
  deleteOne(@Param('id') id:string){
    return this.usersService.deleteOne(Number(id))
  }
  
  @Patch('update/:id')
  updateOne(@Param('id') id:string, @Param('data') data: any){
    return this.usersService.updateOne(Number(id), data)
  }
}
