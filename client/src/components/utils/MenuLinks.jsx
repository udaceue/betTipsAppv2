import { Link } from "react-router-dom";

function MenuLinks({ name, to, icon }) {
  return (
    <Link className="item" to={to}>
      <i className={icon} />
      {name}
    </Link>
  );
}
export default MenuLinks;
