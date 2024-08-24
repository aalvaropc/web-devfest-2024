import "./Button.css";
import { BsGooglePlay } from "react-icons/bs";

const Button = () => {
  return (
    <div className="button-container">
      <button className="custom-buttonn">
        <BsGooglePlay className="icon" /> Google Play
      </button>
    </div>
  );
};

export default Button;
