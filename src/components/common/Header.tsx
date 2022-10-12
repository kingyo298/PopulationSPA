import HeaderStyle from "../../assets/css/components/Header.module.css";

const Header = () => {
  return (
    <>
      <div className={HeaderStyle.header}>
        <div className={HeaderStyle.header__inner}>
          <h1>Population Charts</h1>
        </div>
      </div>
    </>
  );
};
export default Header;
