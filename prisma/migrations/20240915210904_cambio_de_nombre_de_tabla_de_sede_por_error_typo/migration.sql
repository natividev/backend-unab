/*
  Warnings:

  - You are about to drop the column `usuario_id` on the `area` table. All the data in the column will be lost.
  - You are about to drop the column `cedeId` on the `edificio` table. All the data in the column will be lost.
  - You are about to drop the column `ubicaion_id` on the `edificio` table. All the data in the column will be lost.
  - You are about to drop the column `ubicacionId` on the `equipo` table. All the data in the column will be lost.
  - You are about to drop the column `cede_id` on the `tipos_equipos_inventario` table. All the data in the column will be lost.
  - You are about to drop the `cede` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `area` DROP FOREIGN KEY `area_usuario_id_fkey`;

-- DropForeignKey
ALTER TABLE `edificio` DROP FOREIGN KEY `edificio_cedeId_fkey`;

-- DropForeignKey
ALTER TABLE `tipos_equipos_inventario` DROP FOREIGN KEY `tipos_equipos_inventario_cede_id_fkey`;

-- AlterTable
ALTER TABLE `area` DROP COLUMN `usuario_id`;

-- AlterTable
ALTER TABLE `edificio` DROP COLUMN `cedeId`,
    DROP COLUMN `ubicaion_id`,
    ADD COLUMN `sedeId` INTEGER NULL;

-- AlterTable
ALTER TABLE `equipo` DROP COLUMN `ubicacionId`;

-- AlterTable
ALTER TABLE `tipos_equipos_inventario` DROP COLUMN `cede_id`,
    ADD COLUMN `sede_id` INTEGER NULL;

-- DropTable
DROP TABLE `cede`;

-- CreateTable
CREATE TABLE `sede` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `edificio` ADD CONSTRAINT `edificio_sedeId_fkey` FOREIGN KEY (`sedeId`) REFERENCES `sede`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tipos_equipos_inventario` ADD CONSTRAINT `tipos_equipos_inventario_sede_id_fkey` FOREIGN KEY (`sede_id`) REFERENCES `sede`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
