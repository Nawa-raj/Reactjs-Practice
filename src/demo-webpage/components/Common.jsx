import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section>
        <div className="container my-5">
          <div className="row home__page">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
              <h1>
                {props.title}
                <strong className="navbar-brand"> Nauj Technology </strong>
              </h1>
              <h2 className="my-3">{props.desc}</h2>
              <div className="mt-4">
                <NavLink to={props.visit} className="primary__btn">
                  {props.btn_name}
                </NavLink>
              </div>
            </div>
            <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 heaher__img">
              <img
                src={props.imgsrc}
                className="img-fluid animated"
                alt="home"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
