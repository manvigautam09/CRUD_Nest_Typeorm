import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Todo } from './todo.entity';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  getTodoList(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  findTodo(@Param('id') id: string): Promise<Todo | null> {
    return this.todoService.findOne(Number(id));
  }

  @Post()
  addTodo(@Body() todo: Todo): Promise<Todo> {
    return this.todoService.create(todo);
  }

  @Put()
  updateTodo(@Body() todo: Todo): Promise<void> {
    return this.todoService.update(todo);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string): Promise<void> {
    return this.todoService.delete(Number(id));
  }
}
