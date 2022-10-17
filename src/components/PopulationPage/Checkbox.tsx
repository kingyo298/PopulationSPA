interface Props {
  text: string;
}
const Checkbox = (props: Props) => {
  return (
    <>
      <input id="checkbox" type="checkbox" />
      <label htmlFor="checkbox">{props.text}</label>
    </>
  );
};
export default Checkbox;
