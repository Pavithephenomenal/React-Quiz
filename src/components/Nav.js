import logo from "../assets/images/logo-bg.png";
import classes from "../Styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="/" className={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Quiz Master</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
