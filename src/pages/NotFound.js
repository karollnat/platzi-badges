import React from "react";
import NF404 from "../images/Error.svg";
import "./styles/NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  //   return (
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-5">
  //           <h1>Error 404: Not found</h1>
  //         </div>
  //         <div className="col-5">
  //           <img className="Badges__container" src={NF404} alt="404" />
  //         </div>
  //       </div>
  //     </div>
  //   );
  return (
    <div className="home">
      <section className="Badges__error">
        <h1>Parece que estás perido</h1>
        <Link to="/home" className="btn btn-primary">
          Ir al inicio
        </Link>
      </section>
      <section className="Badges__error">
        <img src={NF404} alt="404" />
      </section>
    </div>
  );
}

export default NotFound;
