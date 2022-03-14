import img from "../assets/images/3.jpg";
import classes from "../Styles/Video.module.css";

export default function Video() {
  return (
    <a href="quiz.html">
      <div className={classes.video}>
        <img src={img} alt="" />
        <p>#23 React Hooks Quiz - React useReducer hook </p>
        <div className={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score: Not taken yet</p>
        </div>
      </div>
    </a>
  );
}
