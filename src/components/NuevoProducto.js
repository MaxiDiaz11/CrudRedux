import React, { useState } from "react";
//actions
import { crearNuevoProducto } from "../actions/productosActions";
import { useDispatch, useSelector } from "react-redux/es/exports";

const NuevoProducto = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);

  const dispatch = useDispatch();

  const agregarProducto = (producto) => dispatch(crearNuevoProducto(producto));

  const submitNuevoProducto = (e) => {
    e.preventDefault();

    if (nombre.trim() === "" || precio <= 0) return;

    agregarProducto({ nombre, precio });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar nuevo producto
            </h2>
            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label htmlFor="">Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
                <label htmlFor="" className="mt-3">
                  Precio Producto
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  onChange={(e) => setPrecio(Number(e.target.value))}
                />
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-3"
                >
                  Agregar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
