import { Module } from '@nestjs/common';
import { UsersController } from '../users/users.controller';
import { UsersService } from '../users/users.service';
import { PrismaModule } from '../prisma/prisma.module'; // ✅ Importa corretamente

@Module({
  imports: [PrismaModule], // ✅ Registra o módulo do Prisma
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
