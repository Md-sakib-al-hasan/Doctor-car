import React, { useEffect, useState } from "react";
import Services_cards from "./Services_cards";

export default function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="text-center mt-10">
      <h3 className="text-3xl text-orange-600">Our Services</h3>
      <h2 className="text-5xl">Our serviecs Area</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        saepe ipsam corporis nihil<br></br> laudantium. Veritatis delectus
        exercitationem voluptatem neque repellat!
      </p>

      <div className="grid grid-cols-3 ">
        {services.map((service, id) => (
          <Services_cards key={id} service={service}></Services_cards>
        ))}
      </div>
    </div>
  );
}
