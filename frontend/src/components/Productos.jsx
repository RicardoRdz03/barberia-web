import React from "react";

function Productos() {
  return (
    <>
      <div className="my-16">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-center">PRODUCTOS EN VENTA</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex justify-center col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 ">
            <div id="card">
              <div className="flex justify-center">
                <img
                  style={{ width: "200px", height: "200px" }}
                  src="/pomada3.jpg"
                  alt=""
                />
              </div>
              <div>
                <p>Pomada para un cabello firme - Suavecito</p>
              </div>
              <div className="mt-4 flex items-center" id="espacio">
                <p>$299.99</p>
                <button id="boton1">Comprar</button>
              </div>
            </div>
          </div>
          <div className="flex justify-center col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1">
            <div id="card">
              <div className="flex justify-center">
                <img
                  style={{ width: "200px", height: "200px" }}
                  src="/spray3.jpg"
                  alt=""
                />
              </div>

              <div>
                <p>Pomada para un cabello firme - Suavecito</p>
              </div>
              <div className="mt-4 flex items-center" id="espacio">
                <p>$299.99</p>
                <button id="boton1">Comprar</button>
              </div>
            </div>
          </div>
          <div className="flex justify-center col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1">
            <div id="card">
              <div className="flex justify-center">
                <img
                  style={{ width: "280px", height: "200px" }}
                  src="/pomada.webp"
                  alt=""
                />
              </div>

              <div>
                <p>Pomada para un cabello firme - Suavecito</p>
              </div>
              <div className="mt-4 flex items-center" id="espacio">
                <p>$299.99</p>
                <button id="boton1">Comprar</button>
              </div>
            </div>
          </div>
          <div className="flex justify-center col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1">
            <div id="card">
              <div className="flex justify-center">
                <img
                  style={{ width: "200px", height: "200px" }}
                  src="/spray.webp"
                  alt=""
                />
              </div>

              <div>
                <p>Pomada para un cabello firme - Suavecito</p>
              </div>
              <div className="mt-4 flex items-center" id="espacio">
                <p>$299.99</p>
                <button id="boton1">Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Productos;
