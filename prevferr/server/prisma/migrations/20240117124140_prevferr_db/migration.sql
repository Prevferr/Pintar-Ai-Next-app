/*
  Warnings:

  - You are about to drop the column `fistname` on the `Investor` table. All the data in the column will be lost.
  - You are about to drop the column `fistname` on the `Researcher` table. All the data in the column will be lost.
  - Added the required column `firstname` to the `Investor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstname` to the `Researcher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Investor" DROP COLUMN "firstname",
ADD COLUMN     "firstname" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Researcher" DROP COLUMN "firstname",
ADD COLUMN     "firstname" TEXT NOT NULL;
