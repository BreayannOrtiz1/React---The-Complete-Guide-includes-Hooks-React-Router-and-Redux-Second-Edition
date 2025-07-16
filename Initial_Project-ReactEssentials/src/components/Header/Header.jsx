import "./Header.css";
import reactImg from "../../assets/react-core-concepts.png";

const reactInitMessage = ["Mains", "Core", "Principales"];
function genRandomNum(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  //console.log("Inside of Header");
  const descriptior = reactInitMessage[genRandomNum(reactInitMessage.length)];
  return (
    <header>
      <img src={reactImg} alt='Stylized atom' />
      <h1>React Essentials</h1>
      <p>
        {descriptior} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
