import { UserController } from './user/user.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
@Module({
  controllers: [AppController, UserController],
})
export class AppModule {}
