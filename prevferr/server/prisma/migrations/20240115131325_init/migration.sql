/*
  Warnings:

  - You are about to drop the `Chat_Room` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Chat_Room" DROP CONSTRAINT "Chat_Room_investorId_fkey";

-- DropForeignKey
ALTER TABLE "Chat_Room" DROP CONSTRAINT "Chat_Room_researcherId_fkey";

-- DropTable
DROP TABLE "Chat_Room";
