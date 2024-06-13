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

const Contact = () => {
  return (
    <>
      <AnimatePresence>
        <Layout>
          <Seo title="Contacts" 
          description="Contact us for top-quality external pharmaceutical products. Our team is available during business hours to assist you. Reach us via email or call our office for exceptional customer support."
          keywords="Support and inquiries for cleaning products in Kenya, How to reach Faholo Chemicals in Nairobi?, How to contact the top detergent manufacturer in Kenya?" 
         />
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
                        >Contact Us for</motion.div> 

                     <motion.div
                        variants={headSingleAnime}
                        transition={transition}
                        >Queries, Purchases,</motion.div> 

                       <motion.div
                        variants={headSingleAnime}
                        transition={transition}
                        > or Feedback</motion.div>
                    </motion.h1>
             
              </ContactTitle>

              <ContactFlex>
                <ContactFlexInner>
                  <h3>Office Hours</h3>
                  <h4>
                    Mon-Fri: 8:00AM - 5:00PM <br />
                    Sat: 8:00AM - 12:00 Noon <br />
                    Sun: Closed
                  </h4>
                </ContactFlexInner>
                <ContactFlexInner>
                  <h3>Email:</h3>
                  <h4>faholochemicals@gmail.com</h4>
                </ContactFlexInner>
                <ContactFlexInner>
                  <h3>Office Contacts:</h3>
                  <h4>
                    (+254) 790 753 945 (main) <br />
                    (+254) 770 321 966 <br />                    
                    (+254) 737 483 812
                  </h4>
                </ContactFlexInner>
                <ContactFlexInner>
                  <h3>Sales Contacts:</h3>
                  <h4>
                    (+254) 704 071 649 <br />
                    (+254) 790 409 381 <br />
                    (+254) 703 585 966{" "}
                  </h4>
                </ContactFlexInner>
                <ContactFlexInner>
                  <h3>Office Location:</h3>
                  <h4>
                    Bellway Industrial Park,
                    <br /> GoDown No. 4 <br />
                    Embakasi, Nairobi Kenya.
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

export default Contact;
