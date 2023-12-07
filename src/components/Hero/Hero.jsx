import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import pdfFile  from "../../Resume/NitinMagdum_Resume.pdf"
import ReactTyped from "react-typed";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Hero = () => {
  const classes = useStyles();
   const handleDownloadPdf = () => {
    // Create an anchor element
    const anchor = document.createElement("a");
    anchor.href = pdfFile; // Set the href to the imported PDF file
    anchor.download = "NitinMagdum_Resume.pdf"; // Set the file name for download
    anchor.click();
  };


  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
   
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.1, 1)}>
            Hey There,
            <br />
            
            <ReactTyped strings={["I'm Nitin","Data Engineer","Web Developer","Learner","Tech Enthusiast"]} typeSpeed={100} loop backSpeed={100} cursorChar='_' showCursor={true}/>
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.9, 1)}>
          Passionate about Artificial Intelligence, Quantum Computing and Web Dev
            <br />
                 for their potential in my professional growth
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./Face.png" alt="" />
        </motion.div>
        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">01</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<DescriptionIcon />}
            onClick={handleDownloadPdf}
          >
            Resume
          </Button>

              <br/>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
