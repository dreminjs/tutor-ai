/*
  Warnings:

  - Added the required column `index` to the `Solution` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Solution" ADD COLUMN     "index" INTEGER NOT NULL;
