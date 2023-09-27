CREATE TABLE "memos" (
  "id" SERIAL,
  "content" TEXT,
  "image" VARCHAR(255),
  "created_at" TIMESTAMP,
  "updated_at" TIMESTAMP,
  "PRIMARY" KEY(id)
);

CREATE TABLE "users" (
  "id" SERIAL,
  "username" VARCHAR(255),
  "password" VARCHAR(255),
  "created_at" TIMESTAMP,
  "updated_at" TIMESTAMP
);

ALTER TABLE "memos" ADD FOREIGN KEY ("id") REFERENCES "users" ("id");
