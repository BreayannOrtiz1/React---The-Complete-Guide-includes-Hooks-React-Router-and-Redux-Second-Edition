export default function TabButton(props) {
  //console.log("Inside of button");
  return (
    <li>
      <button
        className={props.isSelected ? "active" : undefined}
        onClick={props.onSelect}
      >
        {props.children}
      </button>
    </li>
  );
}
