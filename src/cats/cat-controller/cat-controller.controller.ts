import { Controller, Get } from '@nestjs/common';

@Controller('cat-controller')
export class CatControllerController {
  @Get('cats')
  findAll(): string {
    return 'This controller return all cats.';
  }
}
