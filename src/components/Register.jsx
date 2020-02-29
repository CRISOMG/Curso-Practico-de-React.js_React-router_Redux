import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Register.scss";

const Register = () => (
  <section className="registerContainer">
    <section className="register">
      <h2>Registrate</h2>
      <form action="Platzi-login.html" className="register-form">
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />
        <button>Registrar</button>
      </form>
      <Link to="/login">iniciar sesion</Link>
    </section>
  </section>
);

export default Register;
