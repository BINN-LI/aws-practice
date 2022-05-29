import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  //test 2
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
