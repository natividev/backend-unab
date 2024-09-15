import { Module } from '@nestjs/common';
import { EmpleadosModule } from './modules/empleados/empleados.module';
import { MarcaModule } from './modules/marca/marca.module';

@Module({
  imports: [EmpleadosModule, MarcaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
