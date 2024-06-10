import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../../Provider/AuthProviders";

export default function Checkout() {
  const service = useLoaderData();
  const { user } = useContext(Authcontext);
  const { title, _id, price, img } = service;

  const handleBookServices = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const Due = price;

    const order = {
      customer: name,
      email,
      img,
      date,
      service_id: _id,
      service_title: title,
      Due,
    };
    console.log(order);

    fetch("http://localhost:5000/bookings", {
      method: "Post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("already succecud to storyd");
        }
      });
  };

  return (
    <div>
      <h2>Book srvices : {title}</h2>
      <div className=" p-6 ">
        <div className="max-w-4xl mx-auto bg-slate-50 p-6 rounded-lg shadow-lg">
          <form
            onSubmit={handleBookServices}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-1">
              <label
                htmlFor="input1"
                className="block text-sm font-medium bg-white text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="input1"
                className="mt-1 block w-full border bg-gray-300 p-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Name"
                name="name"
                defaultValue={user?.displayName}
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="input2"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <input
                type="date"
                id="input2"
                className="mt-1 block p-3 bg-gray-300 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="date"
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="input3"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="Email"
                id="input3"
                className="mt-1 p-3 bg-gray-300 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email"
                defaultValue={user?.email}
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="input4"
                className="block text-sm font-medium text-gray-700"
              >
                Due
              </label>
              <input
                type="text"
                id="input4"
                className="mt-1 p-3 bg-gray-300 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Phone"
                defaultValue={price}
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="textarea"
                className="block text-sm font-medium text-gray-700"
              >
                Write someting about your problems
              </label>
              <textarea
                id="textarea"
                rows="4"
                className="mt-1 block bg-gray-300 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Text Area"
              ></textarea>
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="mt-2   px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
