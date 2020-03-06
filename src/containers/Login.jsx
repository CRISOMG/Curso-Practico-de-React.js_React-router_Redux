import React, { useState } from "react";
import { connect } from "react-redux";
import { loginRequest } from "../actions";
import { Link } from "react-router-dom";
import "../assets/styles/components/Login.scss";
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";
import PropTypes from "prop-types";

const Login = props => {
  const [form, setValue] = useState({
    email: ""
  });
  const handleInput = event => {
    setValue({
      ...form,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push("./");
  };
  return (
    <section className="login">
      <section className="login-container">
        <h2 className="login-title">Inicia sesion</h2>
        <form
          action="Platzi-Video.html"
          className="login-form"
          onSubmit={handleSubmit}
        >
          <input
            className="login-email"
            type="email"
            placeholder="Correo"
            name="email"
            onChange={handleInput}
          />
          <input
            className="login-password"
            type="password"
            placeholder="Contraseña"
            name="password"
            onChange={handleInput}
          />
          <button className="login-button">Iniciar sesion</button>
          <div className="login-remember">
            <label>
              <input type="checkbox" />
              Recuerdame
            </label>
            <Link to="">Olvide mi contraseña</Link>
          </div>
        </form>
        <div className="login-socialContainer">
          <div className="social-login_google">
            <img className="social-icon" src={googleIcon} alt="Google" />
            Iniciar sesion con Google
          </div>
          <div className="social-login_twitter">
            <img className="social-icon" src={twitterIcon} alt="Twitter" />
            Iniciar sesion con Twitter
          </div>
        </div>
        <section className="login-register">
          <p>
            No tienes una cuenta.{" "}
            <Link className="login-register_link" to="/register">
              Registrate
            </Link>
          </p>
        </section>
      </section>
    </section>
  );
};

Login.proptypes = {
  email: PropTypes.string.isRequired
};

const mapDispatchToProps = {
  loginRequest
};

export default connect(null, mapDispatchToProps)(Login);
