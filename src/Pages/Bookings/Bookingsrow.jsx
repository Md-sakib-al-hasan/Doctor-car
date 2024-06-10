import React from "react";

export default function Bookingsrow({ booking, handleDelte, update }) {
  const { _id, customerName, email, date, price, img } = booking;

  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDelte(_id)}
            className="btn btn-sm  btn-circle btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {img ? <img src={img}></img> : <p>not img</p>}
            </div>
          </div>
          <div>
            <div className="font-bold">{date}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>{customerName}</td>
      <td>{email}</td>
      <th>
        <button onClick={() => update(_id)} className="btn btn-ghost btn-xs">
          confrime
        </button>
      </th>
    </tr>
  );
}
