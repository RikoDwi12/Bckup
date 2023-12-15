-- CreateEnum
CREATE TYPE "RateTerm" AS ENUM ('INSIDENTIL', 'MEMBER');

-- CreateTable
CREATE TABLE "rates" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "term" "RateTerm" NOT NULL,
    "price" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,
    "deleted_at" TIMESTAMPTZ(3),

    CONSTRAINT "rates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "devices" (
    "id" TEXT NOT NULL,
    "fingerprint" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,
    "deleted_at" TIMESTAMPTZ(3),

    CONSTRAINT "devices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,
    "deleted_at" TIMESTAMPTZ(3),

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "promos" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" JSONB NOT NULL,
    "amount" INTEGER NOT NULL,
    "percent" INTEGER NOT NULL,
    "min_active_amount" INTEGER NOT NULL,
    "max_active_amount" INTEGER NOT NULL,
    "max_amount" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,
    "deleted_at" TIMESTAMPTZ(3),

    CONSTRAINT "promos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookings" (
    "id" TEXT NOT NULL,
    "device_id" TEXT,
    "customer_id" INTEGER,
    "detail" JSONB NOT NULL,
    "term" "RateTerm" NOT NULL,
    "platform_fee" INTEGER NOT NULL,
    "promo_id" INTEGER,
    "discount" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,
    "deleted_at" TIMESTAMPTZ(3),

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admins" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,
    "deleted_at" TIMESTAMPTZ(3),

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "devices_id_key" ON "devices"("id");

-- CreateIndex
CREATE UNIQUE INDEX "bookings_id_key" ON "bookings"("id");

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "devices"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_promo_id_fkey" FOREIGN KEY ("promo_id") REFERENCES "promos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
