/*
  Warnings:

  - You are about to drop the column `aprovado` on the `Organizacion` table. All the data in the column will be lost.
  - Added the required column `aprobado` to the `Organizacion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Organizacion` DROP COLUMN `aprovado`,
    ADD COLUMN `aprobado` BOOLEAN NOT NULL;
