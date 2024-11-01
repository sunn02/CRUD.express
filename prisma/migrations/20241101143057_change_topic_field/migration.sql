/*
  Warnings:

  - You are about to drop the column `tema` on the `Topic` table. All the data in the column will be lost.
  - You are about to drop the column `voto` on the `Topic` table. All the data in the column will be lost.
  - Added the required column `topic` to the `Topic` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Topic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "topic" TEXT NOT NULL,
    "vote" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Topic" ("id") SELECT "id" FROM "Topic";
DROP TABLE "Topic";
ALTER TABLE "new_Topic" RENAME TO "Topic";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
