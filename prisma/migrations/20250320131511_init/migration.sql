/*
  Warnings:

  - A unique constraint covering the columns `[pasteId,dateBucket]` on the table `Analytics` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Analytics_pasteId_dateBucket_idx";

-- CreateIndex
CREATE UNIQUE INDEX "Analytics_pasteId_dateBucket_key" ON "Analytics"("pasteId", "dateBucket");
