import { Module } from '@nestjs/common';
import { EmpleadosModule } from './modules/empleados/empleados.module';

@Module({
  imports: [EmpleadosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
