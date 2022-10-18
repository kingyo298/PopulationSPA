import CheckboxStyle from "../../assets/css/components/Checkbox.module.css";

interface Props {
  text: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
  checked: boolean;
}
const Checkbox = (props: Props) => {
  return (
    <div className={CheckboxStyle.checkbox}>
      <input
        id={props.id}
        type="checkbox"
        checked={props.checked}
        value={props.value}
        onChange={props.onChange}
      />
      <label htmlFor="checkbox">{props.text}</label>
    </div>
  );
};
export default Checkbox;
