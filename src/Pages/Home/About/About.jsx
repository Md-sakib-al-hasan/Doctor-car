import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

export default function About() {
  return (
    <div className=" flex justify-between mt-28 ">
      <div className="w-1/2 mt-3 ">
        <div className=" w-4/5 mx-auto  relative ">
          <img className="rounded-3xl" src={person} alt="" />
          <img
            className="w-2/4 absolute -bottom-10 -right-10 border-8 border-black-500 "
            src={parts}
            alt=""
          />
        </div>
      </div>
      <div className="w-1/2 space-y-3">
        <h4 className="text-2xl text-red-600">About Us</h4>
        <h1 className="text-5xl font-bold text-black">
          We are quralified <br></br> & of experience <br></br> in this field
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          ad perspiciatis voluptatem praesentium vel distinctio eius corrupti
          dolores? Sit explicabo facere numquam laboriosam dicta fuga, natus
          magni pariatur optio consectetur nulla quia itaque quo esse neque,
          iusto beatae consequatur saepe ex. Enim libero et in facere. Illo
          corporis veniam labore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quae
          dignissimos labore veritatis voluptatibus odit, autem laboriosam
          commodi cum soluta?
        </p>
        <button className="btn bg-orange-500 text-white">
          Get more Information
        </button>
      </div>
    </div>
  );
}
