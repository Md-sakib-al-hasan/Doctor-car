import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../Provider/AuthProviders";
import Bookingsrow from "./Bookingsrow";

export default function Bookings() {
  const { user } = useContext(Authcontext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}&step=1`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  const update = (id) => {
    console.log("sk");
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confrim" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("success");
          const remaning = bookings.filter((booking) => booking._id !== id);
          const upd = bookings.find((booking) => booking._id === id);
          upd.status = "confriem";
          const newbookings = [update, ...remaning];
          setBookings(newbookings);
        }
      });
  };
  const handleDelte = (id) => {
    const proceed = confirm("Are you sure you want to dlete");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted sucfful");
            const remaning = bookings.filter((booking) => booking._id != id);
            setBookings(remaning);
          }
        });
    }
  };
  return (
    <div>
      <p className="text-5xl">This is booking formola{bookings.length}</p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((booking) => (
              <Bookingsrow
                key={booking._id}
                handleDelte={handleDelte}
                booking={booking}
                update={update}
              ></Bookingsrow>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
