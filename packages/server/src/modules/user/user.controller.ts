import {
  NotFoundException,
  Controller,
  Get,
  Post,
  Patch,
  Query,
  Param,
  Body, Inject,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { API_VERSION_ROUTES, TAGS } from '../../constants';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import {
  LeadersStatisticReadDto,
  UsersAndTogglesReadDto,
  StatisticsReadDto,
  UserCreateDto,
  UserUpdateDto,
} from './dto';

@Controller(`${API_VERSION_ROUTES.v1}/users`)
export class UserController {
  constructor(
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
    private readonly userService: UserService,
  ) {}

  @ApiOkResponse({
    description: 'Referral leaders statistics has been found.',
    type: LeadersStatisticReadDto,
  })
  @ApiNotFoundResponse({
    description: 'Referral leaders statistics has not found.',
  })
  @ApiOperation({
    tags: [TAGS.USERS],
    operationId: 'getReferralLeaders',
    summary: 'Returning information about referral leaders',
  })
  @Get('leaders')
  async getReferralLeaders(): Promise<LeadersStatisticReadDto> {
    const referral_leaders_statistic = this.cacheManager.get<LeadersStatisticReadDto>('leaders');

    if (!referral_leaders_statistic) {
      throw new NotFoundException();
    }

    return referral_leaders_statistic;
  }

  @ApiOkResponse({
    description: 'User statistics has been found.',
    type: StatisticsReadDto,
  })
  @ApiOperation({
    tags: [TAGS.USERS],
    operationId: 'getUsersStatistics',
    summary: 'Returning information about users statistics',
  })
  @Get('statistics')
  async getUsersStatistics(): Promise<StatisticsReadDto> {
    return this.userService.getStatistics();
  }

  @ApiOkResponse({
    description: 'User and toggles has been found.',
    type: UsersAndTogglesReadDto,
  })
  @ApiNotFoundResponse({
    description: 'User not found.',
  })
  @ApiOperation({
    tags: [TAGS.USERS],
    operationId: 'getOneUserAndToggles',
    summary: 'Returning information about user and toggles',
  })
  @Get('toggles/:id')
  async getOneUserAndToggles(
    @Param('id') id: string,
  ): Promise<UsersAndTogglesReadDto> {
    const { user, toggles } = await this.userService.getOneUserAndToggles(id);

    if (!user) {
      throw new NotFoundException();
    }

    return { user, toggles };
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
    @Query('select') select?: 'short' | 'username' | 'referral_counter',
  ) {
    let user: UserEntity | null = null;

    switch (select) {
      case 'short':
        user = await this.userService.getOneUserShort(id);
        break;
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
