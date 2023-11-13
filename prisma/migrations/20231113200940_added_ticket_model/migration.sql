-- CreateTable
CREATE TABLE "Ticket" (
    "id" TEXT NOT NULL,
    "eventID" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "qRCode" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "purchaseDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Ticket_eventID_idx" ON "Ticket"("eventID");

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_eventID_fkey" FOREIGN KEY ("eventID") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
