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
          <Seo title="About" keywords={[
            `About Faholo Chemicals`, 
            `Who is the leading manufacturer of cleaning products and liquid detergents in Kenya?`,
            `Who is the leading manufacturer of antiseptics in Kenya?`,
            `Who is the leading manufacturer of disinfectants in Kenya?`,
            `About the best chemical manufacturer in Kenya`,
            `Information on top hygiene product manufacturers in Kenya`,
            `Details about Faholo Chemicals in Kenya`,
            ]} />
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
                        >A Journey of Growth</motion.div> 

                     <motion.div
                        variants={headSingleAnime}
                        transition={transition}
                        >& Collaborative</motion.div> 

                       <motion.div
                        variants={headSingleAnime}
                        transition={transition}
                        >Exploration</motion.div>
                    </motion.h1>
              </IntroAboutHeading>
                <IntroAboutText>
                  <h3>
                    Established in 2015 as a family company, Faholo has grown to
                    be part of Kenya’s & East Africa’s known and trusted
                    Chemical brands setting ambitious goals for the future to
                    become a competitive global player. <br /> <br />
                    Over the years of growth & hardwork, our priority has always
                    been to carefully research and deliver products using the
                    best practices gathered from our experience, and to warmly
                    give the best experience to each of our clients.
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
                        >so little,</motion.div> 

                       <motion.div
                        variants={headSingleAnime}
                        transition={transition}
                        >Together we can do </motion.div>
                        <motion.div
                        className="bigtext"
                        variants={headSingleAnime}
                        transition={transition}
                        > so much.</motion.div>
             
                    </motion.h1>
                    
              </IntroAboutHeadingOne>
                <IntroAboutTextOne>
                  <h3>
                  We are humbled to house a team of progressive, hard-working
                    and forward-thinking individuals, with years of industry
                    experience & mastering in our field of work. <br /> <br />{" "}
                    Our collaborative partnership with our stakeholders has put
                    our best foot forward in carrying out our operations with
                    passion & commitment, setting industry standards in the
                    manufacturing of a focused range of pharmaceutical and
                    chemical products.
                  </h3>
                </IntroAboutTextOne>
              </IntroWrapper>
              
              <StrategyWrapper>
                <h1>Company Strategy</h1>
                <StrategyWrapperInner>
                  <StrategyTitle>
                    <h3>Purpose</h3>
                  </StrategyTitle>
                  <StrategyInfo>
                    <h3>
                      To become a world-class Pharmaceutical company, having
                      distribution networks in most of Africa’s Countries and
                      beyond.
                    </h3>
                  </StrategyInfo>
                </StrategyWrapperInner>
                <StrategyWrapperInner>
                  <StrategyTitle>
                    <h3>Mission</h3>
                  </StrategyTitle>
                  <StrategyInfo>
                    <h3>
                      To build long term relationships with our customers and
                      clients and provide exceptional customer services by
                      pursuing business through innovation and advanced
                      technology.
                    </h3>
                  </StrategyInfo>
                </StrategyWrapperInner>
                <StrategyWrapperInner>
                  <StrategyTitle>
                    <h3>Vision</h3>
                  </StrategyTitle>
                  <StrategyInfo>
                    <h3>
                      To provide Quality services that exceed the expectations
                      of our esteemed customers.
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
