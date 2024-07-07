/*
  Warnings:

  - You are about to drop the column `date_start` on the `activity` table. All the data in the column will be lost.
  - You are about to drop the `status` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `activity` DROP FOREIGN KEY `Activity_statusId_fkey`;

-- AlterTable
ALTER TABLE `activity` DROP COLUMN `date_start`,
    ADD COLUMN `status` VARCHAR(20) NULL;

-- DropTable
DROP TABLE `status`;
