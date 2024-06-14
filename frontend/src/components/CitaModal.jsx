import React from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Autocomplete,
  AutocompleteItem,
  RadioGroup,
  Radio,
  Input,
  DatePicker,
} from "@nextui-org/react";

function CitaModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const [scrollBehavior, setScrollBehavior] = React.useState("inside");

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  return (
    <>
      <div className="flex justify-center">
        <Button key={"2xl"} onPress={() => handleOpen(size)} id="boton">
          AGENDA TU CITA
        </Button>
        <Modal
          scrollBehavior={scrollBehavior}
          size={size}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-center text-2xl font-bold">
                  AGENDA TU CITA
                </ModalHeader>
                <ModalBody>
                  <div className="flex justify-center">
                    <h1 className="text-xl font-semibold">
                      Selecciona la sucursal
                    </h1>
                  </div>
                  <div className="flex justify-center mb-5">
                    <RadioGroup isRequired>
                      <Radio value="altamira">Altamira, Tamaulipas</Radio>
                      <Radio value="tampico">Tampico, Tamaulipas</Radio>
                      <Radio value="madero">CD. Madero, Tamaulipas</Radio>
                    </RadioGroup>
                  </div>
                  <div className="flex justify-center">
                    <h1 className="text-xl font-semibold">Datos de contacto</h1>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-1">
                      <Input
                        isRequired
                        className="mb-2"
                        type="text"
                        label="Nombre"
                      />
                    </div>
                    <div className="col-span-1">
                      <Input
                        className="mb-2"
                        isRequired
                        type="text"
                        label="Apellidos"
                      />
                    </div>
                  </div>
                  <div>
                    <Input isRequired type="email" label="Correo electronico" />
                  </div>
                  <div className="flex justify-center">
                    <h1 className="text-xl font-semibold text-center">
                      Selecciona el servicio
                    </h1>
                  </div>
                  <div>
                    <Autocomplete
                      isRequired
                      label="Servicios disponibles"
                      defaultSelectedKey="Corte de cabello para adulto - $380"
                    >
                      <AutocompleteItem>
                        Corte de cabello para niño - $320
                      </AutocompleteItem>
                      <AutocompleteItem>
                        Corte de cabello para adulto - $380
                      </AutocompleteItem>
                      <AutocompleteItem>Greca sencilla - $500</AutocompleteItem>
                      <AutocompleteItem>
                        Limpieza de contorno - $180
                      </AutocompleteItem>
                      <AutocompleteItem>
                        Recorte o alienado de barba - $340
                      </AutocompleteItem>
                      <AutocompleteItem>
                        Afeitado de barba - $340
                      </AutocompleteItem>
                    </Autocomplete>
                  </div>
                  <div className="flex justify-center">
                    <h1 className="text-xl font-semibold text-center">
                      Fecha para la cita
                    </h1>
                  </div>
                  <div className="flex justify-center">
                    <DatePicker
                      label="Fecha de la cita"
                      className="max-w-[284px]"
                    />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}

export default CitaModal;
