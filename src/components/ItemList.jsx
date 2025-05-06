// Question - 4
import React from "react";

export default function ItemList({ fruits }) {
  return (
    <>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}
