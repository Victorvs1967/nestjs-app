import { Injectable } from '@nestjs/common';
import { Cat } from 'src/models/cat.interface';

@Injectable()
export class CatServiceService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll() {
    return this.cats;
  }
}
