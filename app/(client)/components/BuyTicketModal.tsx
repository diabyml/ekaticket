"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";

import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Event } from "@prisma/client";
import { Divider } from "@nextui-org/divider";
import { Minus, Plus } from "lucide-react";

export default function BuyTicketModal({ event }: { event: Event }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (number: number) => {
    setQuantity((prev) => {
      if (prev === 0 && number === -1) {
        return 0;
      }
      return prev + number;
    });
  };

  return (
    <>
      <Button onPress={onOpen}>Achetez vos tickets</Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Sélectionner vos places
              </ModalHeader>
              <ModalBody>
                <div className="flex items-center justify-center">
                  <Card className={""}>
                    <CardHeader className="flex items-center">
                      <div className="font-bold mx-auto">
                        EKT-PASS ({event.price} FCFA)
                      </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                      <div className="mx-auto flex items-center space-x-2">
                        <div>
                          <Button
                            isIconOnly
                            color="danger"
                            variant="faded"
                            aria-label="Subtract place"
                            onClick={() => handleQuantityChange(-1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="px-2">{quantity}</div>
                        <div>
                          <Button
                            isIconOnly
                            color="success"
                            variant="faded"
                            aria-label="Add place"
                            onClick={() => handleQuantityChange(1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardBody>
                    <Divider />
                    <CardFooter className="">
                      {" "}
                      Nombre de place restantes (0){" "}
                    </CardFooter>
                  </Card>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fermer
                </Button>
                <Button color="primary" onPress={onClose}>
                  Continuer
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
