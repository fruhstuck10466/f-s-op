import { AnimatePresence, motion} from "framer-motion";
import React from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Seo from "../components/seo";

//styles
import {
  ContactWrapper,
  ContactContainer,
  ContactFlex,
  ContactFlexInner,
  ContactTitle,
} from "../styles/contactStyles";

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

const Stockists = () => {
  return (
    <>
      <AnimatePresence>
        <Layout>
        <Seo title="Stockists" keywords={[`Stockist Faholo Chemicals Where can i buy Faholo Chemicals Products`]}/>
          <ContactContainer
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.6, 0.05, 0, 0.9],
            }}
          >
            <ContactWrapper>
              <ContactTitle>
              <motion.h1
                    variants={headParentAnime}
                    initial="hidden"
                    animate="show"                
                    >
                        <motion.div                   
                        variants={headSingleAnime}
                        transition={transition}
                        >Stockists</motion.div> 

                     {/* <motion.div
                        variants={headSingleAnime}
                        transition={transition}
                        >Purchases or</motion.div> 

                       <motion.div
                        variants={headSingleAnime}
                        transition={transition}
                        >Feedback ?</motion.div> */}
                    </motion.h1>
             
              </ContactTitle>

              <ContactFlex>
                <ContactFlexInner>
                  <h3>Nairobi</h3>
                  <h4>
                    Transwide Pharmaceuticals <br />
                    NILA Pharmaceuticals
                  </h4>
                </ContactFlexInner>
                <ContactFlexInner>
                  <h3>Mombasa</h3>
                  <h4>Pharmacity Pharamaceuticals</h4>
                </ContactFlexInner>
                <ContactFlexInner>
                  <h3>Bungoma</h3>
                  <h4>
                    Bungoma Chemist
                  </h4>
                </ContactFlexInner>
                <ContactFlexInner>
                  <h3>Machakos</h3>
                  <h4>
                    Thwake Pharmaceuticals
                  </h4>
                </ContactFlexInner>
                <ContactFlexInner>
                  <h3>Mandera</h3>
                  <h4>
                  Mandera Drugmart
                  </h4>
                </ContactFlexInner>
              </ContactFlex>
            </ContactWrapper>
            <Footer />
          </ContactContainer>
        </Layout>
      </AnimatePresence>
    </>
  );
};

export default Stockists;
