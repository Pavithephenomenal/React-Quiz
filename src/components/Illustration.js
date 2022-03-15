import signup from "../assets/images/signup.png";
import classes from "../Styles/Illustration.module.css";

export default function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={signup} alt="Signup" />
    </div>
  );
}
