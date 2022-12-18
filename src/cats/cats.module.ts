import { Module } from '@nestjs/common';
import { CatControllerController } from 'src/cats/cat-controller/cat-controller.controller';
import { CatServiceService } from 'src/cats/cat-service/cat-service.service';

@Module({
  controllers: [ CatControllerController ],
  providers: [ CatServiceService ],

})
export class CatsModule {}
