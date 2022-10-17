import CheckboxStyle from "../../assets/css/components/Checkbox.module.css";

interface Props {
  text: string;
}
const Checkbox = (props: Props) => {
  return (
    <div className={CheckboxStyle.checkbox}>
      <input id="checkbox" type="checkbox" />
      <label htmlFor="checkbox">{props.text}</label>
    </div>
  );
};
export default Checkbox;
