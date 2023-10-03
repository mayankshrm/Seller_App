import React from "react";

import "./card.css";

const Card = (props) => {
  return (
    <>
      <div className="container1 ">
        <div className="img">
          <img className="img" src={props.img} alt="img"></img>
        </div>
        <div className="title">
          <div>{props.title}</div>
          <div className="yr">{props.year}</div>
        </div>

        <div className="spec">
          <div className="spec1">
            <div className="item">
              <span className="icon">
                <i class="fa-solid fa-gauge fa-sm"></i>
              </span>
              {props.milage}
            </div>
            <div className="item">
              <i class="fa-solid fa-van-shuttle icon fa-sm"></i>
              {props.engine}
            </div>
          </div>
          <div className="spec1">
            <div className="item">
              <i class="fa-solid  fa-tractor icon"></i>
              {props.company}
            </div>
          </div>
        </div>

        <div className="price">
          <div className="pr">{props.price}</div>
          <button className="btn1">Rent now</button>
        </div>
      </div>
    </>
  );
};

export default Card;
