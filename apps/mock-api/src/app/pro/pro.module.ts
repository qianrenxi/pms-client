import { Module } from '@nestjs/common';
import { ChartsModule } from './charts/charts.module';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profile/profile.module';
import { RulesModule } from './rules/rules.module';

import { ProController } from './pro.controller';


@Module({
  imports: [
    ChartsModule,
    TodosModule,
    UsersModule,
    ProfileModule,
    RulesModule,
  ],
  controllers: [
    ProController
  ],
  providers: [],
  exports: []
})
export class ProModule {}
