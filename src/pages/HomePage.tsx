import { Link } from "react-router-dom";

import HomePageStyle from "../assets/css/HomePage.module.css";
import Button from "../components/HomePage/Button";

const HomePage = () => {
  return (
    <>
      <div className={HomePageStyle.layout}>
        <section className={HomePageStyle.topbar}></section>
        <section className={`${HomePageStyle.main__container}`}>
          <h1 className={HomePageStyle.title}>Welcome to Population App!</h1>
          <Link to="/populations">
            <Button />
          </Link>
        </section>
        <section className={HomePageStyle.footer}>
          <div className={HomePageStyle.footer__container}>
            <small>Copyright &copy; 2022 Hiroaki Okuda</small>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
