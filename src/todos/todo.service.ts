import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}
  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async findOne(id: number): Promise<Todo | null> {
    return await this.todoRepository.findOne({ where: { id } });
  }

  async create(todo: Todo): Promise<Todo> {
    return await this.todoRepository.save(todo);
  }

  async update(todo: Todo): Promise<void> {
    await this.todoRepository.update(todo.id, todo);
  }

  async delete(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
