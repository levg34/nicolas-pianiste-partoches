-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('Facile', 'Moyen', 'Difficile', 'TresDifficile');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Pedagogie', 'Arrangement', 'Pastiches', 'OeuvresOriginales');

-- CreateTable
CREATE TABLE "Score" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "instrument" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "image" TEXT,
    "pdfUrl" TEXT,
    "audioUrl" TEXT,
    "difficulty" "Difficulty" NOT NULL,
    "category" "Category" NOT NULL,
    "usedInstruments" TEXT[],

    CONSTRAINT "Score_pkey" PRIMARY KEY ("id")
);
