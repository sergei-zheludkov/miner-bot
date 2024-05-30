import {
  Controller,
  NotFoundException,
  Get,
  Post,
  Patch,
  Param,
  Body,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { API_VERSION_ROUTES } from '../../constants';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { UserCreateDto, UserUpdateDto } from './dto';

@Controller(`${API_VERSION_ROUTES.v1}/users`)
class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOkResponse({
    description: 'User has been found.',
    type: UserEntity,
  })
  @ApiNotFoundResponse({
    description: 'User not found.',
  })
  @ApiOperation({
    tags: ['User'],
    operationId: 'getOneUser',
    summary: 'Returning information about user',
  })
  @Get(':id')
  async getOneUser(@Param('id') id: string) {
    const user = await this.userService.getOneUser(id);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  @ApiCreatedResponse({
    description: 'User has been successfully created.',
    type: UserEntity,
  })
  @ApiOperation({
    tags: ['User'],
    operationId: 'postUser',
    summary: 'Creating new user in db',
  })
  @Post()
  async postUser(
    @Body('who_invited_id') who_invited_id: string,
    @Body() body: UserCreateDto,
  ) {
    return who_invited_id
      ? this.userService.createUserWithReferral(body)
      : this.userService.createUser(body);
  }

  @ApiOkResponse({
    description: 'User has been updated.',
    type: UserEntity,
  })
  @ApiNotFoundResponse({
    description: 'User not found.',
  })
  @ApiOperation({
    tags: ['User'],
    operationId: 'patchUser',
    summary: 'Updating user data',
  })
  @Patch()
  async patchUser(@Body() data: UserUpdateDto) {
    const user = await this.userService.updateUser(data);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}

export { UserController };
