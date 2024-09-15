import { Module } from '@nestjs/common';
import { EmpleadosModule } from './modules/empleados/empleados.module';
import { MarcaModule } from './modules/marca/marca.module';
import { EquipoModule } from './modules/equipo/equipo.module';

@Module({
  imports: [EmpleadosModule, MarcaModule, EquipoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
