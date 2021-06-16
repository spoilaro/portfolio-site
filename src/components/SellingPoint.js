import React from "react";

export default function SellingPoint() {
  return (
    <div className="selling-point">
      <i></i>
      <h2>Website</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, saepe
        earum id a repellat expedita possimus in asperiores est sunt.
      </p>
      <MoreButton />
    </div>
  );
}

function MoreButton() {
  return <button>Learn More</button>;
}
