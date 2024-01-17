/*
  Warnings:

  - You are about to drop the column `certified_id` on the `Client` table. All the data in the column will be lost.
  - Added the required column `client_id` to the `Certified` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_certified_id_fkey";

-- AlterTable
ALTER TABLE "Certified" ADD COLUMN     "client_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "certified_id";

-- AddForeignKey
ALTER TABLE "Certified" ADD CONSTRAINT "Certified_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
