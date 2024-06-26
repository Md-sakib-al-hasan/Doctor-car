import React from "react";
import { Link } from "react-router-dom";

export default function Services_cards({ service }) {
  const { _id, service_id, title, img, price, description, facility } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={service.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl text-orange-400">${price}</p>
        <div className="card-actions">
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-primary">Booknew Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
