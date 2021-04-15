import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  let desc_text = props.p_desc;
  return (
    <>
      <div className="col-lg-3 col-md-4 col-11">
        <div className="card">
          <img src={props.p_img} className="card-img-top" alt={props.p_name} />
          <div className="card-body">
            <h5 className="card-title">{props.p_name}</h5>
            <p className="card-text">{`${desc_text.substring(0, 80)}...`}</p>
            <NavLink to="#" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
