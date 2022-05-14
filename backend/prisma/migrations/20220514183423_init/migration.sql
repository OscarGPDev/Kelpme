/*
  Warnings:

  - Added the required column `aprovado` to the `Organizacion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Organizacion` ADD COLUMN `aprovado` BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE `Noticia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `imagen` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
