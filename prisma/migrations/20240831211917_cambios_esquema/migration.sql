/*
  Warnings:

  - You are about to drop the `tipos_equipos_inventario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `tipos_equipos_inventario` DROP FOREIGN KEY `tipos_equipos_inventario_equipo_id_fkey`;

-- DropForeignKey
ALTER TABLE `tipos_equipos_inventario` DROP FOREIGN KEY `tipos_equipos_inventario_usuario_id_fkey`;

-- DropTable
DROP TABLE `tipos_equipos_inventario`;

-- CreateTable
CREATE TABLE `tipos_equipos_inventarioß` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `equipo_id` INTEGER NOT NULL,
    `especificaciones` VARCHAR(191) NOT NULL,
    `direccion_ip` VARCHAR(191) NOT NULL,
    `estado` ENUM('ASIGNADO', 'DESCARTE', 'BODEGA') NOT NULL DEFAULT 'ASIGNADO',
    `administrativo` BOOLEAN NOT NULL DEFAULT false,
    `email` VARCHAR(191) NULL,
    `usuario_id` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `modelo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `id_marca` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tipos_equipos_inventarioß` ADD CONSTRAINT `tipos_equipos_inventarioß_equipo_id_fkey` FOREIGN KEY (`equipo_id`) REFERENCES `equipo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tipos_equipos_inventarioß` ADD CONSTRAINT `tipos_equipos_inventarioß_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `modelo` ADD CONSTRAINT `modelo_id_marca_fkey` FOREIGN KEY (`id_marca`) REFERENCES `marca`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
