-- AlterTable
ALTER TABLE `tipos_equipos_inventario` MODIFY `fecha_ingreso_equipo` DATE NOT NULL,
    MODIFY `fecha_asignado` DATE NOT NULL,
    MODIFY `fecha_descarte` DATE NULL;
