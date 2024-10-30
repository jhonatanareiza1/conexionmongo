import { useState } from "react";

import "./App.css";

function App() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [enviar, setEnviar] = useState(false);

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value);
  }

  function cambiarContraseña(evento) {
    setContraseña(evento.target.value);
  }

  async function ingresar() {
    const peticion = await fetch(
      "http://localhost:4000/index?usuario=" +
        usuario +
        "&contraseña=" +
        contraseña
    );
    if (peticion.ok) {
      setEnviar(true);
      alert("usuario conectado");
    } else {
      alert("error en datos de usuario");
    }

    console.log("estado logeado", enviar);
    if (enviar) {
      return <principal />;
    }
  }

  return (
    <>
      <h1>SOY DEL VERDE SOY FELIZ</h1>
      <input
        type="text"
        placeholder="usuario"
        name="usuario"
        id="usuario"
        value={usuario}
        onChange={cambiarUsuario}
      />
      <input
        type="password"
        placeholder="contraseña"
        name="contraseña"
        id="contraseña"
        value={contraseña}
        onChange={cambiarContraseña}
      />
      <button onClick={ingresar} type="submit" name="enviar" id="enviar">
        ingresar
      </button>
    </>
  );
}

export default App;
