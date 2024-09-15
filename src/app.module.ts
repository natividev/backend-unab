import { Module } from '@nestjs/common';
import { EmpleadosModule } from './modules/empleados/empleados.module';
import { MarcaModule } from './modules/marca/marca.module';
import { EquipoModule } from './modules/equipo/equipo.module';
import { SedeModule } from './modules/sede/sede.module';
import { EdificioModule } from './modules/edificio/edificio.module';
import { NivelModule } from './modules/nivel/nivel.module';
import { AreaModule } from './modules/area/area.module';
import { EspecificacionesModule } from './modules/especificaciones/especificaciones.module';
import { ModeloModule } from './modules/modelo/modelo.module';

@Module({
  imports: [EmpleadosModule, MarcaModule, EquipoModule, SedeModule, EdificioModule, NivelModule, AreaModule, EspecificacionesModule, ModeloModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
