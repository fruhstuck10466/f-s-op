import React from 'react';
import { Link } from "gatsby";

//styles
//import { Container } from '../../styles/globalStyles';
import { HeroWrap, HeroWrapInner, HeroText, HeroImage, HeroImageInner, ContactMeta, ArrowMeta } from '../../styles/heroStyles';

//image
//import Img from "gatsby-image";

//svg and images
//import DnaImage from "../../assets/images/dna.gif"
import Chem from "../../assets/images/land.jpg"
import ArrowRight from "../../assets/svg/arrow-right-black.svg";

//framer
import { motion } from 'framer-motion';

const transition = { duration: 1.5, ease: [0.165, 0.84, 0.44, 1] };


const headParentAnime = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.8 }
    }
  };

//child single animation
const headSingleAnime = {
    hidden : {
        opacity: 0,
        y: 75,
        skewY: 7,
    },
    show : {
        opacity: 1,
        y: 0,
        skewY: 0,
       
    },           
}




const Hero = () => {
    return (
       
            <HeroWrap>
                <HeroWrapInner>
                <HeroText>  
                    <motion.h1
                    variants={headParentAnime}
                    initial="hidden"
                    animate="show"                
                    >
                        <motion.div                   
                        variants={headSingleAnime}
                        transition={transition}
                        >Contributing</motion.div> 

                     <motion.div
                        variants={headSingleAnime}
                        transition={transition}
                        >to the quality</motion.div> 

                        <motion.div
                        variants={headSingleAnime}
                        transition={transition}
                        >of life</motion.div> 

                    </motion.h1>
                    <motion.h3
                    initial={{opacity: 0, y: 75, skewY: 7}}
                    animate={{opacity: 1, y: 0, skewY: 0}}
                    transition={{
                        delay: 1,
                        duration: 1,
                        ease: [0.165, 0.84, 0.44, 1],
                    }}
                    >We are a Kenyan operated manufacturing and distributing company based in Nairobi, with a strong focus on high-quality external pharmaceutical products and cleaning solutions.</motion.h3>
                </HeroText>
                <HeroImage>
                    <HeroImageInner
                    initial={{opacity: 0, y: 75}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                        delay: 1,
                        duration: 1,
                        ease: [0.165, 0.84, 0.44, 1],
                    }}
                    >           
                        <img
                        src={Chem} alt="hero collage"/>
                    </HeroImageInner>                    
                </HeroImage>                
                </HeroWrapInner>
                
                  <ContactMeta
                  initial={{opacity: 0, y: 75}}
                  animate={{opacity: 1, y: 0}}
                  transition={{
                      delay: 1,
                      duration: 1,
                      ease: [0.165, 0.84, 0.44, 1],
                  }}
                  >
                     <p> <Link to="/about" >Our Values<span><img src={ArrowRight} alt=""/></span></Link></p>
                  </ContactMeta>
                  <ArrowMeta
                  initial={{scale: 0}}
                  animate={{scale: 1}}
                  transition={{
                      delay: 1.5,
                      duration: 1,
                      ease: [0.165, 0.84, 0.44, 1],
                  }}
                  >
                      <Link to="/#footer-div" >
                      <motion.div
                      
                      animate={{rotate: -20}}
                      transition={{
                          delay: 2.5,
                          duration: 0.5,
                          ease: "linear",
                      }}
                      style ={{
                          position: "relative",
                          height: "100%",
                          width: "100%",
                      }}>
                      <p>Available <br/> on Jumia</p>
                      </motion.div>
                      </Link>
                    
                  </ArrowMeta>
                     
        </HeroWrap>
       
    );
}

export default Hero;
