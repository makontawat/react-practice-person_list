import "./Header.css";
import { MdSunny } from "react-icons/md";
import { RiMoonClearFill } from "react-icons/ri";

export default function Header(props) {
  const theme = props.theme;
  const setTheme = props.setTheme;
  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <>
      <nav>
        <h1>{props.title}</h1>
        <span onClick={toggleTheme}>
          {theme === "light" ? (
            <RiMoonClearFill size={30} />
          ) : (
            <MdSunny size={30} />
          )}
        </span>
      </nav>
    </>
  );
}
