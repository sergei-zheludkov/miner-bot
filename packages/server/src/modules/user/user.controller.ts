import {
  Controller,
  NotFoundException,
  Get,
  Post,
  Patch,
  Query,
  Param,
  Body,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse, ApiQuery,
} from '@nestjs/swagger';
import { API_VERSION_ROUTES, TAGS } from '../../constants';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { StatisticsGetDto, UserCreateDto, UserUpdateDto } from './dto';

@Controller(`${API_VERSION_ROUTES.v1}/users`)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOkResponse({
    description: 'User statistics has been found.',
    type: StatisticsGetDto,
  })
  @ApiOperation({
    tags: [TAGS.USERS],
    operationId: 'getUsersStatistics',
    summary: 'Returning information about users statistics',
  })
  @Get('statistics')
  async getUsersStatistics(): Promise<StatisticsGetDto> {
    return this.userService.getStatistics();
  }

  @ApiOkResponse({
    description: 'User has been found.',
    type: UserEntity,
  })
  @ApiNotFoundResponse({
    description: 'User not found.',
  })
  @ApiOperation({
    tags: [TAGS.USERS],
    operationId: 'getOneUser',
    summary: 'Returning information about user',
  })
  @ApiQuery({ name: 'select', required: false, type: String })
  @Get(':id')
  async getOneUser(
    @Param('id') id: string,
    @Query('select') select?: 'username' | 'referral_counter',
  ) {
    let user: UserEntity | null = null;

    switch (select) {
      case 'username':
        user = await this.userService.getNickname(id);
        break;
      case 'referral_counter':
        user = await this.userService.getReferralCounter(id);
        break;
      default:
        user = await this.userService.getOneUser(id);
    }

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
    tags: [TAGS.USERS],
    operationId: 'postUser',
    summary: 'Creating new user in db',
  })
  @Post()
  async postUser(
    @Body('who_invited_id') who_invited_id: string,
    @Body() data: UserCreateDto,
  ) {
    return who_invited_id
      ? this.userService.createUserWithReferral(data)
      : this.userService.createUser(data);
  }

  @ApiOkResponse({
    description: 'User has been updated.',
    type: UserEntity,
  })
  @ApiNotFoundResponse({
    description: 'User not found.',
  })
  @ApiOperation({
    tags: [TAGS.USERS],
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
