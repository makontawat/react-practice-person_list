import { useState } from "react";
import man from "../assets/man.svg";
import woman from "../assets/woman.svg";

export default function User({ item, deleteUser }) {
  return (
    <>
      <li
        style={{
          borderStyle: "solid",
          borderColor: item.gender == "Male" ? "green" : "pink",
        }}
      >
        <img src={item.gender == "Male" ? man : woman} width={40} height={40} />
        <p>{item.name}</p>
        <div className="control">
          <button onClick={() => deleteUser(item.id)}> ลบ </button>
        </div>
      </li>
    </>
  );
}
