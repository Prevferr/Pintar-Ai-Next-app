/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Jurnal` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Jurnal_title_key" ON "Jurnal"("title");
