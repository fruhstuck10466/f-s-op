import React from 'react';
import { Link } from "gatsby";

//styles
import { Container } from '../../styles/globalStyles';
import { HeroWrap, HeroImageWrap, HeroContent, ContactMeta, ArrowMeta } from '../../styles/heroStyles';

//image
//import Img from "gatsby-image";

//svg and images
//import DnaImage from "../../assets/images/dna.gif"
import Chem from "../../assets/images/lgi4.jpg"
import ArrowRight from "../../assets/svg/arrow-right-black.svg";

//framer
import { motion } from 'framer-motion';

// const transition = { duration: 1.5, ease: [0.165, 0.84, 0.44, 1] };


// const headParentAnime = {
//     hidden: { opacity: 0 },
//     show: {
//         opacity: 1,
//         transition: { staggerChildren: 0.1, delayChildren: 0.8 }
//     }
// };

// //child single animation
// const headSingleAnime = {
//     hidden: {
//         opacity: 0,
//         y: 75,
//         skewY: 7,
//     },
//     show: {
//         opacity: 1,
//         y: 0,
//         skewY: 0,

//     },
// }




const Hero = () => {
    return (

        <HeroWrap>
<Container>
            {/* IMAGE STRIP */}
            <HeroImageWrap
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
            >
                <img src={Chem} alt="Chemical manufacturing and applications" />
            </HeroImageWrap>

            {/* TEXT CONTENT */}
            <HeroContent>
                {/* <motion.h1
                    variants={headParentAnime}
                    initial="hidden"
                    animate="show"
                >
                    <motion.span variants={headSingleAnime}>Contributing</motion.span>
                    <motion.span variants={headSingleAnime}>to the Quality</motion.span>
                    <motion.span variants={headSingleAnime}>of Life</motion.span>
                </motion.h1> */}

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.8,
                        duration: 0.8,
                        ease: [0.165, 0.84, 0.44, 1],
                    }}
                >
                    As a leading manufacturer and supplier of high-quality chemical products we offer a comprehensive range 
                   used as disinfectants,
                    antiseptics, cosmetics, sanitisers, cleaning solutions, and laboratory applications.
                    All products are manufactured, bottled, and packaged at our facility in
                    Nairobi, Kenya; We believe in Quality, Honesty and Customer service.
                </motion.p>

            </HeroContent>
            {/* <HeroWrapInner>
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
                </HeroWrapInner> */}

            <ContactMeta
                initial={{ opacity: 0, y: 75 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 1,
                    duration: 1,
                    ease: [0.165, 0.84, 0.44, 1],
                }}
            >
                <p> <Link to="/about" >Our Values<span><img src={ArrowRight} alt="" /></span></Link></p>
            </ContactMeta>
            <ArrowMeta
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    delay: 1.5,
                    duration: 1,
                    ease: [0.165, 0.84, 0.44, 1],
                }}
            >
                <Link to="/#prod-div" >
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
                        <h6>View Product Ranges</h6>
                    </motion.div>
                </Link>

            </ArrowMeta>
</Container>
        </HeroWrap>

    );
}

export default Hero;
