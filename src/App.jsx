import { useState, useEffect, use } from "react";
import Header from "./components/Header";
import PersonList from "./components/PersonList";
import "./App.css";
import "./components/AddForm";
import AddForm from "./components/AddForm";

function App() {
  const [population, setPopulation] = useState([
    { id: 1, name: "John", gender: "Male" },
    { id: 2, name: "Michael", gender: "Male" },
    { id: 3, name: "Penny", gender: "Female" },
  ]);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  function deleteUser(id) {
    const newPopulation = population.filter((item) => item.id !== id);
    setPopulation(newPopulation);
  }

  useEffect(() => {
    console.log(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Header title="MyApp" theme={theme} setTheme={setTheme} />
      <main>
        <AddForm data={population} setData={setPopulation} />
        <PersonList item={population} deleteUser={deleteUser} />
      </main>
    </div>
  );
}

export default App;
