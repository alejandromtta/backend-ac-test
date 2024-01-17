-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "document_number" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "certified_id" INTEGER NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certified" (
    "id" SERIAL NOT NULL,
    "id_local" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "name_certificate" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,

    CONSTRAINT "Certified_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_certified_id_fkey" FOREIGN KEY ("certified_id") REFERENCES "Certified"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
