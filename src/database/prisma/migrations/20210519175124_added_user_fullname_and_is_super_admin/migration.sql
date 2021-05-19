-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullname" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isSuperAdmin" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_User" ("id", "email", "password") SELECT "id", "email", "password" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
