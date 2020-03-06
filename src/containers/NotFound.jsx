import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/NotFound.scss";

const NotFound = () => (
  <section className="not_found-section">
    <div className="not_found-div">
      <span className="span-404">404</span>
      <p className="not_found-message">
        No hay contenido relacionado con lo que usted esta buscando.
      </p>
      <div>
        <Link to="/">Reagresar al Home</Link>
      </div>
    </div>
  </section>
);

export default NotFound;
