/*
  Warnings:

  - You are about to drop the column `modelo` on the `especificacion` table. All the data in the column will be lost.
  - You are about to drop the column `codigo_empleado` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the `tipos_equipos_inventarioß` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ubicacion` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_nivel` to the `area` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario_id` to the `area` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modelo_id` to the `especificacion` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tipos_equipos_inventarioß` DROP FOREIGN KEY `tipos_equipos_inventarioß_equipo_id_fkey`;

-- DropForeignKey
ALTER TABLE `tipos_equipos_inventarioß` DROP FOREIGN KEY `tipos_equipos_inventarioß_usuario_id_fkey`;

-- DropIndex
DROP INDEX `usuario_codigo_empleado_key` ON `usuario`;

-- AlterTable
ALTER TABLE `area` ADD COLUMN `id_nivel` INTEGER NOT NULL,
    ADD COLUMN `usuario_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `especificacion` DROP COLUMN `modelo`,
    ADD COLUMN `empleadosId` INTEGER NULL,
    ADD COLUMN `modelo_id` INTEGER NOT NULL,
    MODIFY `activo_fijo` BOOLEAN NULL DEFAULT false;

-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `codigo_empleado`;

-- DropTable
DROP TABLE `tipos_equipos_inventarioß`;

-- DropTable
DROP TABLE `ubicacion`;

-- CreateTable
CREATE TABLE `empleados` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `numero_telefono` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `empleados_numero_telefono_key`(`numero_telefono`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cede` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `edificio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `ubicaion_id` INTEGER NOT NULL,
    `cedeId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nivel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipos_equipos_inventario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cede_id` INTEGER NULL,
    `edificio_id` INTEGER NULL,
    `nivel_id` INTEGER NULL,
    `area_id` INTEGER NULL,
    `equipo_id` INTEGER NULL,
    `especificacion_id` INTEGER NULL,
    `direccion_ip` VARCHAR(191) NOT NULL,
    `estado` ENUM('ASIGNADO', 'DESCARTE', 'BODEGA') NOT NULL DEFAULT 'ASIGNADO',
    `administrativo` BOOLEAN NOT NULL DEFAULT false,
    `academico` BOOLEAN NOT NULL DEFAULT false,
    `empleado_id` INTEGER NULL,
    `usuario_id` INTEGER NULL,
    `fecha_ingreso_equipo` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fecha_asignado` DATETIME(3) NOT NULL,
    `fecha_descarte` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `edificio` ADD CONSTRAINT `edificio_cedeId_fkey` FOREIGN KEY (`cedeId`) REFERENCES `cede`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `area` ADD CONSTRAINT `area_id_nivel_fkey` FOREIGN KEY (`id_nivel`) REFERENCES `nivel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `area` ADD CONSTRAINT `area_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `especificacion` ADD CONSTRAINT `especificacion_modelo_id_fkey` FOREIGN KEY (`modelo_id`) REFERENCES `modelo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `especificacion` ADD CONSTRAINT `especificacion_empleadosId_fkey` FOREIGN KEY (`empleadosId`) REFERENCES `empleados`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tipos_equipos_inventario` ADD CONSTRAINT `tipos_equipos_inventario_empleado_id_fkey` FOREIGN KEY (`empleado_id`) REFERENCES `empleados`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tipos_equipos_inventario` ADD CONSTRAINT `tipos_equipos_inventario_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tipos_equipos_inventario` ADD CONSTRAINT `tipos_equipos_inventario_cede_id_fkey` FOREIGN KEY (`cede_id`) REFERENCES `cede`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tipos_equipos_inventario` ADD CONSTRAINT `tipos_equipos_inventario_especificacion_id_fkey` FOREIGN KEY (`especificacion_id`) REFERENCES `especificacion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tipos_equipos_inventario` ADD CONSTRAINT `tipos_equipos_inventario_equipo_id_fkey` FOREIGN KEY (`equipo_id`) REFERENCES `equipo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tipos_equipos_inventario` ADD CONSTRAINT `tipos_equipos_inventario_edificio_id_fkey` FOREIGN KEY (`edificio_id`) REFERENCES `edificio`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tipos_equipos_inventario` ADD CONSTRAINT `tipos_equipos_inventario_nivel_id_fkey` FOREIGN KEY (`nivel_id`) REFERENCES `nivel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tipos_equipos_inventario` ADD CONSTRAINT `tipos_equipos_inventario_area_id_fkey` FOREIGN KEY (`area_id`) REFERENCES `area`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
