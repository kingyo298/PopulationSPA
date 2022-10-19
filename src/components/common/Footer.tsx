import FooterStyle from "@/assets/css/components/Footer.module.css";

const Footer = () => {
  return (
    <section className={FooterStyle.footer}>
      <div className={FooterStyle.footer__container}>
        <small>Copyright &copy; 2022 Hiroaki Okuda</small>
      </div>
    </section>
  );
};
export default Footer;
