import { useState } from "react/cjs/react.development";
import axios from "axios";

const userInitialState = {
  nombre: "",
  apellido: "",
  correo: "",
  telefono: null,
};
export const FormComponent = () => {
  const [user, setUser] = useState(userInitialState);
  const [isFormUserShowing, setIsFormUserShowing] = useState(false);

  const saveUser = async () => {
    await axios.post("http://localhost:8081/usuarios", user);
  };

  return (
    <div className="grid-from-container">
      <button id={'showForm'} onClick={() => setIsFormUserShowing(!isFormUserShowing)}>
        {!isFormUserShowing ? "Mostrar formulario" : "Esconder formulario"}
      </button>
      {isFormUserShowing && (
        <>
          <div>
            <label>Nombre</label>
            <input
              id="nombre"
              onBlur={(e) => setUser({ ...user, nombre: e.target.value })}
            />
          </div>
          <div>
            <label>apellido</label>
            <input
              id="apellido"
              onBlur={(e) => setUser({ ...user, apellido: e.target.value })}
            />
          </div>
          <div>
            <label>correo</label>
            <input
              id="correo"
              onBlur={(e) => setUser({ ...user, correo: e.target.value })}
            />
          </div>
          <div>
            <label>telefono</label>
            <input
              id="telefono"
              onBlur={(e) => setUser({ ...user, telefono: e.target.value })}
            />
          </div>

          <button id={'submit'} onClick={() => saveUser()}>Guardar Usuario</button>
        </>
      )}
    </div>
  );
};
