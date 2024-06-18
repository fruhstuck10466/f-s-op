import React from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Seo from "../components/seo";

//styles
import {
  AboutContainer,
  IntroWrapper,
  IntroAboutText,
  IntroAboutImage,
  StrategyWrapper,
  StrategyWrapperInner,
  StrategyTitle,
  StrategyInfo,
  IntroAboutHeadingOne,
  IntroAboutHeading,
  IntroAboutTextOne,
} from "../styles/aboutStyles";
import { AnimatePresence, motion } from "framer-motion";

const transition = { duration: 1.5, ease: [0.165, 0.84, 0.44, 1] };


const headParentAnime = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.5 }
    }
  };

//child single animation
const headSingleAnime = {
    hidden : {
      opacity: 0, rotateX: 75, rotateY: 10, rotateZ: -9,
    },
    show : {
      opacity: 1, rotateX: 0, rotateY: 0, rotateZ: 0 ,
       
    },           
}

const About = () => {
  return (
    <>
      <AnimatePresence>
        <Layout>
          <Seo title="About" 
          description="Discover our goal to be a world-class pharmaceutical company across Africa."
          keywords="Information on top hygiene product manufacturers in Kenya, Who is the leading manufacturer of cleaning products and liquid detergents in Kenya?, Who is the leading manufacturer of antiseptics in Kenya?, Who is the leading manufacturer of disinfectants in Kenya?" 
         />
          <AboutContainer
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.6, 0.05, 0, 0.9],
            }}
          >
            
            <IntroWrapper>
              <IntroAboutHeading>        
              <motion.h1
                    variants={headParentAnime}
                    initial="hidden"
                    animate="show"                
                    >
                        <motion.div                   
                        variants={headSingleAnime}
                        transition={transition}
                        >A Journey of growth</motion.div> 

                     <motion.div
                        variants={headSingleAnime}
                        transition={transition}
                        >& collaborative</motion.div> 

                       <motion.div
                        variants={headSingleAnime}
                        transition={transition}
                        >exploration</motion.div>
                    </motion.h1>
              </IntroAboutHeading>
                <IntroAboutText>
                  <h3>
                  Established in 2015 as a family-owned enterprise, FAHOLO® has emerged as one of Kenya's and East Africa's most trusted chemical brands. Our ambitious goals drive us to become a competitive global player in the pharmaceutical and chemical industry. <br /> <br />
                  Over the years, our unwavering commitment to growth and hard work has enabled us to carefully research and deliver products using best practices honed from extensive experience. We are dedicated to providing each client with an exceptional and personalized experience.
                  </h3>
                </IntroAboutText>
              </IntroWrapper>

              <IntroAboutImage>

              </IntroAboutImage>

              <IntroWrapper>
              <IntroAboutHeadingOne>        
              <motion.h1
                    variants={headParentAnime}
                    initial="hidden"
                    animate="show"                
                    >
                        <motion.div                   
                        variants={headSingleAnime}
                        transition={transition}
                        >Alone we can do</motion.div> 

                     <motion.div
                     className="smalltext"
                        variants={headSingleAnime}
                        transition={transition}
                        >so little 🤏,</motion.div> 

                       <motion.div
                        variants={headSingleAnime}
                        transition={transition}
                        >together we can do </motion.div>
                        <motion.div
                        className="bigtext"
                        variants={headSingleAnime}
                        transition={transition}
                        >so much 💪.</motion.div>
             
                    </motion.h1>
                    
              </IntroAboutHeadingOne>
                <IntroAboutTextOne>
                  <h3>
                  At FAHOLO®, we are proud to house a team of progressive, hardworking, and forward-thinking professionals. With years of industry experience and mastery, our team is our greatest asset. Our collaborative partnerships with stakeholders fuel our passion and commitment, setting industry standards in manufacturing a focused range of pharmaceutical and chemical products. <br/><br/>
                  Our extensive product range, certified by prestigious organizations like KEBS, ensures compliance with international standards, promoting business growth and environmental wellness. From external pharmaceuticals and surface disinfectants to all-purpose detergents, our meticulously crafted products are designed to meet the highest quality and safety standards. <br/><br/>
                  Our dedication to excellence, customer satisfaction, and sustainability defines who we are and guides our operations. We actively engage in community initiatives and prioritize environmentally friendly practices to minimize our ecological footprint. Learn more from our social accounts.
                  </h3>
                </IntroAboutTextOne>
              </IntroWrapper>
              
              <StrategyWrapper>
                <h1>Company strategy</h1>
                <StrategyWrapperInner>
                  <StrategyTitle>
                    <h3>Purpose</h3>
                  </StrategyTitle>
                  <StrategyInfo>
                    <h3>
                    To become a world-class pharmaceutical company, with distribution networks spanning most African countries and beyond.
                    </h3>
                  </StrategyInfo>
                </StrategyWrapperInner>
                <StrategyWrapperInner>
                  <StrategyTitle>
                    <h3>Mission</h3>
                  </StrategyTitle>
                  <StrategyInfo>
                    <h3>
                    To build long-term relationships with our customers and clients by providing exceptional customer service through innovation and advanced technology.
                    </h3>
                  </StrategyInfo>
                </StrategyWrapperInner>
                <StrategyWrapperInner>
                  <StrategyTitle>
                    <h3>Vision</h3>
                  </StrategyTitle>
                  <StrategyInfo>
                    <h3>
                    To deliver quality services that exceed the expectations of our esteemed customers.
                    </h3>
                  </StrategyInfo>
                </StrategyWrapperInner>
              </StrategyWrapper>
         
            <Footer />
          </AboutContainer>
        </Layout>
      </AnimatePresence>
    </>
  );
};

export default About;
