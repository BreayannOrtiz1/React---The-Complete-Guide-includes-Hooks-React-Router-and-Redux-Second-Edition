export default function TabButton({ children, isSelected, ...props }) {
  //console.log("Inside of button");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
