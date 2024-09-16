import { Link, NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <div>
        <Link to="/">TravelTrucks</Link>
      </div>
      <ul className={style.navigation}>
        <li>
          <NavLink className={style.navLink} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={style.navLink} to="/catalog">
            Catalog
          </NavLink>
        </li>
      </ul>
      <hr />
    </nav>
  );
};

export default Navigation;
