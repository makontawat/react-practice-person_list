import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import "./PersonList.css";
import User from "./User";

export default function PersonList(props) {
  const population = props.item;
  const [show, setShow] = useState(true);
  return (
    <div className="container">
      <div className="header">
        <h2 style={{ color: "red", fontSize: "30px" }}>
          จำนวนประชากร {population.length} คน
        </h2>
        <span cursor="pointer" onClick={() => setShow(!show)}>
          {show ? <FaRegEyeSlash size={40} /> : <FaRegEye size={40} />}
        </span>
      </div>
      <ul>
        {show &&
          population.map((item) => (
            <User key={item.id} item={item} deleteUser={props.deleteUser} />
          ))}
      </ul>
    </div>
  );
}
