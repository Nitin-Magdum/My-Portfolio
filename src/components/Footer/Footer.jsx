import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
  <a className="anchor" id="footer"></a>
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:nitinmagdum111@gmail.com" >saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <a className="secondaryText" href="https://www.linkedin.com/in/dktenitinmagdum" target="_blank">LinkedIn</a>
            <a className="secondaryText" href="https://github.com/Nitin-Magdum" target="_blank">GitHub</a>
            <a className="secondaryText" href="https://www.instagram.com/nitinmagdum/" target="_blank">Instagram</a>
            <a className="secondaryText" href="https://twitter.com/nitin__magdum" target="_blank">Twitter</a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;