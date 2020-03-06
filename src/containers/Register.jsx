import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerRequest } from "../actions";
import "../assets/styles/components/Register.scss";

const Register = props => {
  const [form, setValues] = useState({
    email: "",
    name: "",
    password: ""
  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push("./");
  };

  return (
    <section className="registerContainer">
      <section className="register">
        <h2>Registrate</h2>
        <form
          action="Platzi-login.html"
          className="register-form"
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            type="text"
            placeholder="Nombre"
            onChange={handleInput}
          />
          <input
            name="email"
            type="email"
            placeholder="Correo"
            onChange={handleInput}
          />
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            onChange={handleInput}
          />
          <button>Registrar</button>
        </form>
        <Link className="register-logingLink" to="/login">
          iniciar sesion
        </Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest
};

export default connect(null, mapDispatchToProps)(Register);
