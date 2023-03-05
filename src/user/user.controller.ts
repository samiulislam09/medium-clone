import { Controller, Post, Req, Param } from '@nestjs/common';

@Controller('/user')
export class UserController {
  @Post('/:id')
  postUser(@Param() id: number) {
    return id;
  }
}
