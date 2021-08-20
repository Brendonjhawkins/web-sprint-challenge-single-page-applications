import React from "react";

export default function FormDetails({ details }) {
  if (!details) {
    return <h3> Working on fetching your order details....</h3>;
  }

  return (
    <div>
      <h2>{details.name}</h2>
      <p>Pizza size: {details.size}</p>
      {!!details.toppings && !!details.toppings.length && (
        <div>
          Toppings:
          <ul>
            {details.toppings.map((like, idx) => (
              <li key={idx}>{like}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}