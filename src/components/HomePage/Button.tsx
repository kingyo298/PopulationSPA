import ButtonStyle from "@/assets/css/components/Button.module.css";
import { ButtonProps } from "@/types";

const Button = (props: ButtonProps) => {
  return (
    <>
      <button className={ButtonStyle.button} onClick={props.onClick}>
        {props.text}
      </button>
    </>
  );
};
export default Button;
