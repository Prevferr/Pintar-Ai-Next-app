/*
  Warnings:

  - You are about to drop the column `journal_file` on the `Jurnal` table. All the data in the column will be lost.
  - You are about to drop the column `portofolio_id` on the `Jurnal` table. All the data in the column will be lost.
  - You are about to drop the column `portofolio` on the `Researcher` table. All the data in the column will be lost.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `research` to the `Researcher` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_investorId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_researcherId_fkey";

-- AlterTable
ALTER TABLE "Jurnal" DROP COLUMN "journal_file",
DROP COLUMN "portofolio_id",
ADD COLUMN     "researcherId" INTEGER;

-- AlterTable
ALTER TABLE "Researcher" DROP COLUMN "portofolio",
ADD COLUMN     "research" TEXT NOT NULL;

-- DropTable
DROP TABLE "Comment";
