import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  Query,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiQuery,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { CountriesEnum, GenderEnum, PlacementEnum } from '@common_bot/shared';
import { API_VERSION_ROUTES, TAGS } from '../../constants';
import { TaskService } from './task.service';
import { TaskEntity } from './task.entity';
import { TaskCreateDto, TaskUpdateDto } from './dto';
import type { GetQuery } from './types';

@Controller(`${API_VERSION_ROUTES.v1}/tasks`)
export class TaskController {
  constructor(private readonly tasksService: TaskService) {}

  @ApiOkResponse({
    description: 'User has been found.',
    type: TaskEntity,
  })
  @ApiNotFoundResponse({
    description: 'User not found.',
  })
  @ApiOperation({
    tags: [TAGS.TASKS],
    operationId: 'getOneTask',
    summary: 'Returning information about user',
  })
  @Get(':id')
  async getOneUser(@Param('id') id: string) {
    const user = await this.tasksService.getOneTask(id);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  @ApiOkResponse({
    description: 'Feedback notes has been found.',
    type: [TaskEntity],
  })
  @ApiOperation({
    tags: [TAGS.TASKS],
    operationId: 'getTasks',
    summary: 'Returning information about available for user tasks',
  })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'offset', required: false, type: Number })
  @ApiQuery({ name: 'country', required: false, type: String })
  @ApiQuery({ name: 'placement', required: false, type: String })
  @ApiQuery({ name: 'status', required: false, type: String })
  @ApiQuery({ name: 'gender', required: false, type: String })
  @Get()
  getFeedbackNotes(
    @Query('country') country?: CountriesEnum,
    @Query('placement') placement?: PlacementEnum,
    @Query('limit') limit = 10,
    @Query('offset') offset = 0,
    @Query('status') status: GetQuery['status'] = 'all',
    @Query('gender') gender: GenderEnum = GenderEnum.ALL,
  ) {
    const query = {
      limit, offset, country, placement, status, gender,
    };

    return this.tasksService.getTasks(query);
  }

  @ApiCreatedResponse({
    description: 'Task has been successfully created.',
    type: TaskEntity,
  })
  @ApiOperation({
    tags: [TAGS.TASKS],
    operationId: 'postTask',
    summary: 'Creating new task in db',
  })
  @Post()
  async postUser(@Body() data: TaskCreateDto) {
    return this.tasksService.createTask(data);
  }

  @ApiOkResponse({
    description: 'Task has been updated.',
    type: TaskEntity,
  })
  @ApiNotFoundResponse({
    description: 'Task not found.',
  })
  @ApiOperation({
    tags: [TAGS.TASKS],
    operationId: 'patchTask',
    summary: 'Updating task data',
  })
  @Patch()
  async patchUser(@Body() data: TaskUpdateDto) {
    const user = await this.tasksService.updateTask(data);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}
