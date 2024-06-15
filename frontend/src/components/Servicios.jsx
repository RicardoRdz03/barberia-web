import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

function Servicios() {
  return (
    <>
      <div className="bg-stone-900">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold text-center text-white">
            SERVICIOS
          </h1>
        </div>
        <div>
          <table className="text-white">
            <tr className="pl-9">
              <td>CORTE DE CABELLO</td>
              <td>$380</td>
            </tr>
            <tr>
              <td>Hola</td>
              <td>Adios</td>
            </tr>
            <tr>
              <td>Hola</td>
              <td>Adios</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Servicios;
