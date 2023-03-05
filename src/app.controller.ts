import { Controller, Get, Param, Post, Req } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getUser() {
    return 'hello   user';
  }
//   @Post('/user/:id')
//   post(@Param() id: number) {
//     console.log(id);
//     return id;
//   }
}
