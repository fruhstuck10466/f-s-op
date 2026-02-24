import React from 'react';
import { Link } from "gatsby";
import {BtnStyle} from "../../styles/globalStyles"

//styles
import { Container } from '../../styles/globalStyles';
import { HeroWrap, HeroInner, HeroText, HeroVisual, ArrowMeta } from '../../styles/heroStyles';

//image
//import Img from "gatsby-image";

//svg and images
//import DnaImage from "../../assets/images/dna.gif"
import Chem from "../../assets/images/ding.png"
//import ArrowRight from "../../assets/svg/arrow-right.svg";

//framer
import { motion } from 'framer-motion';

const transition = { duration: 1.5, ease: [0.165, 0.84, 0.44, 1] };


const headParentAnime = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.8 }
    }
};

//child single animation
const headSingleAnime = {
    hidden: {
        opacity: 0,
        y: 75,
        skewY: 7,
    },
    show: {
        opacity: 1,
        y: 0,
        skewY: 0,

    },
}




const Hero = () => {
    return (

        <HeroWrap>
<Container>
           <HeroInner>
    {/* LEFT: TEXT */}
    <HeroText>
        <motion.h1
                    variants={headParentAnime}
                    initial="hidden"
                    animate="show"                
                    >
                        <motion.div                   
                        variants={headSingleAnime}
                        transition={transition}
                        > Manufacturing Chemical</motion.div> 

                     <motion.div
                        variants={headSingleAnime}
                        transition={transition}
                        >Solutions for Essential</motion.div> 

                        <motion.div
                        variants={headSingleAnime}
                        transition={transition}
                        > Industries</motion.div> 

                    </motion.h1>
      {/* <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
      >
        Manufacturing Chemical Solutions
        <span>for Essential Industries</span>
      </motion.h1> */}

      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        We manufacture finished chemical products serving hospitals,
        clinics, laboratories, pharmacies, healthcare & institutional disinfection, cosmetics & dermatological care and
        industrial users. All products are formulated, bottled, and
        packaged at our Nairobi, KE facility to ensure consistent quality
        and reliable supply.
      </motion.h3>
      <BtnStyle>
                          <Link to="/products" >
                          <button>
                          <span>Explore Catalogue</span>
                          </button></Link>
                          </BtnStyle>
    </HeroText>

    {/* RIGHT: IMAGE */}
    <HeroVisual>
      <motion.img
        src={Chem}
        alt="Chemical product range"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      />
    </HeroVisual>
            <ArrowMeta
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    delay: 1.5,
                    duration: 1,
                    ease: [0.165, 0.84, 0.44, 1],
                }}
            >
                {/* <Link to="/#prod-div" > */}
                    <motion.div

                        animate={{ rotate: -20 }}
                        transition={{
                            delay: 2.5,
                            duration: 0.5,
                            ease: "linear",
                        }}
                        style={{
                            position: "relative",
                            height: "100%",
                            width: "100%",
                            marginLeft: "10px",
                        
                        }}>
                        <h6>
                            <a
                aria-label="Whatsapp Catalogue"
                href="https://wa.me/c/254111203302"
                alt="Whatsapp Catalogue Link"
              >
                Tap to view<br/>Whatsapp<br/>Catalogue
              </a>
                           </h6>
                    </motion.div>
                {/* </Link> */}

            </ArrowMeta>
</HeroInner>
</Container>
        </HeroWrap>

    );
}

export default Hero;
