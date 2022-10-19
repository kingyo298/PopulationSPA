import { Link } from "react-router-dom";

import HomePageStyle from "@/assets/css/HomePage.module.css";
import Footer from "@/components/common/Footer";
import Button from "@/components/HomePage/Button";

const HomePage = () => {
  return (
    <>
      <div className={HomePageStyle.layout}>
        <section className={HomePageStyle.topbar}></section>
        <section className={`${HomePageStyle.main__container}`}>
          <h1 className={HomePageStyle.title}>Welcome to Population App!</h1>
          <Link to="/populations">
            <Button text="Start!" />
          </Link>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
