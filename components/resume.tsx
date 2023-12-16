"use client";

import React from "react";
import Image from "next/image";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function App() {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const handleOpen = () => {
    onOpen();
  }

  return (
    <>
      <div className="flex flex-wrap gap-3">
          <Button  
            variant="flat" 
            color="warning" 
            onPress={() => handleOpen()}
            className="capitalize"
          >
           Resume
          </Button>
      </div>
      <Modal backdrop='blur' isOpen={isOpen} onClose={onClose} isDismissable size='2xl' >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                  <Image src="/myresume.png" width={700} height={700} alt="Picture of the author"/>
              </ModalBody>
              <ModalFooter>
                <Button color="primary">
                    <a href="/Resume.pdf" download>
                        Download
                    </a>
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}