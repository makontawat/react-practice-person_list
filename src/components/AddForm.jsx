import "./AddForm.css";
import { useState, useEffect } from "react";
export default function AddForm({ data, setData }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  function saveData(e) {
    e.preventDefault();
    const person = { id: crypto.randomUUID(), name: name, gender: gender };
    console.log("บันทึกข้อมูล", person);
    setData([...data, person]);
    setName("");
    setGender("Male");
  }
  return (
    <section className="container">
      <form onSubmit={saveData}>
        <label>ชื่อประชากร</label>
        <input
          type="text"
          placeholder="ชื่อ"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value={"Male"}>ชาย</option>
          <option value={"Female"}>หญิง</option>
        </select>
        <button className="btn-save" type="submit" disabled={name.length < 1}>
          เพิ่ม
        </button>
      </form>
    </section>
  );
}
