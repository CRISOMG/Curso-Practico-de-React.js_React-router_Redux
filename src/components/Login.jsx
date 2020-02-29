import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Login.scss";
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";

const Login = () => (
  <section className="login">
    <section className="login-container">
      <h2 className="login-title">Inicia sesion</h2>
      <form action="Platzi-Video.html" className="login-form">
        <input className="login-email" type="email" placeholder="Correo" />
        <input
          className="login-password"
          type="password"
          placeholder="Contraseña"
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
          No tienes una cuenta.
          <Link to="/register">Registrate</Link>
        </p>
      </section>
    </section>
  </section>
);

export default Login;
