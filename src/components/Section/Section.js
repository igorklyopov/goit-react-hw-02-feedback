// import PropTypes from "prop-types";
import style from "../Section/Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section className={style.section}>
      <h2 className={style.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
