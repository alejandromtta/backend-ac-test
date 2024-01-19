/*
  Warnings:

  - Added the required column `link` to the `Certified` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Certified" ADD COLUMN     "link" TEXT NOT NULL;
