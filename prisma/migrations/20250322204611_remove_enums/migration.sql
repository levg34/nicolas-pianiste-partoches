/*
  Warnings:

  - Changed the type of `difficulty` on the `Score` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `category` on the `Score` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Score" DROP COLUMN "difficulty",
ADD COLUMN     "difficulty" TEXT NOT NULL,
DROP COLUMN "category",
ADD COLUMN     "category" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Category";

-- DropEnum
DROP TYPE "Difficulty";
