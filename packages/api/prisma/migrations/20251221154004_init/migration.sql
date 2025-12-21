/*
  Warnings:

  - Added the required column `physicSectionId` to the `PhysicTask` table without a default value. This is not possible if the table is not empty.
  - Made the column `physicTaskId` on table `PhysicTaskSolution` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "PhysicTaskSolution" DROP CONSTRAINT "PhysicTaskSolution_physicTaskId_fkey";

-- AlterTable
ALTER TABLE "PhysicTask" ADD COLUMN     "physicSectionId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PhysicTaskSolution" ALTER COLUMN "physicTaskId" SET NOT NULL;

-- CreateTable
CREATE TABLE "PhysicSection" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "PhysicSection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PhysicSection_title_key" ON "PhysicSection"("title");

-- AddForeignKey
ALTER TABLE "PhysicTask" ADD CONSTRAINT "PhysicTask_physicSectionId_fkey" FOREIGN KEY ("physicSectionId") REFERENCES "PhysicSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhysicTaskSolution" ADD CONSTRAINT "PhysicTaskSolution_physicTaskId_fkey" FOREIGN KEY ("physicTaskId") REFERENCES "PhysicTask"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
