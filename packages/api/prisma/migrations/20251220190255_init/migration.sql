-- CreateTable
CREATE TABLE "PhysicTask" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "PhysicTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhysicTaskSolution" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "physicTaskId" TEXT,

    CONSTRAINT "PhysicTaskSolution_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PhysicTaskSolution" ADD CONSTRAINT "PhysicTaskSolution_physicTaskId_fkey" FOREIGN KEY ("physicTaskId") REFERENCES "PhysicTask"("id") ON DELETE SET NULL ON UPDATE CASCADE;
