-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "department" INTEGER,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pointing" (
    "id" SERIAL NOT NULL,
    "check_ins" TIMESTAMP(3),
    "check_outs" TIMESTAMP(3),
    "comment" TEXT,
    "period" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "id_employee" INTEGER NOT NULL,

    CONSTRAINT "Pointing_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pointing" ADD CONSTRAINT "Pointing_id_employee_fkey" FOREIGN KEY ("id_employee") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;
