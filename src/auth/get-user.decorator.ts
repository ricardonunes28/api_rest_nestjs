import { ExecutionContext, createParamDecorator } from '@nestjs/common';
// import { User } from 'src/users/user.entity';

export const GetUser = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    return data ? user?.[data] : user;
  },
);
