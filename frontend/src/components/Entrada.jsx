import React from "react";
import Nav from "./Nav";

import CitaModal from "./CitaModal";

function Entrada() {
  return (
    <>
      <div className="h-screen">
        <div id="fondo" style={{ height: "100vh" }} className="">
          <Nav />
          <div
            className="flex justify-center items-end"
            style={{ height: "80vh" }}
          >
            <div className="flex-col">
              <div className="flex justify-center">
                <h1 className="text-4xl md:text-5xl text-white font-bold text-left ml-9 mr-9">
                  Barbería de primera calidad
                </h1>
              </div>
              <CitaModal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Entrada;
