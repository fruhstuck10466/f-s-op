import React, { useState, useEffect } from 'react';

//framer useAnimation
import { useAnimation, motion } from 'framer-motion';

//intersection observer
import {useInView} from "react-intersection-observer"

import {FaqWrap, FaqWrapInner, FaqTitle, FaqInfo, FaqHeader, FaqQuestion, FaqIcon, FaqAnswer} from "../../styles/faqStyles"
import { Container } from '../../styles/globalStyles';

const faqList = [
    {
        id: 0,
        title: "How to use a Specific Medication ?",
        item: "Other than the labeled instructions, We insist that you consult with a registered doctor or pharmacist."
    },
    {
        id: 1,
        title: "Product Availability & Price List ?",
        item: "Contact us with your order to learn more about the availability & the current price list."
    },
    {
        id: 2,
        title: "Deliveries outside Nairobi ?",
        item: "This is possible through courier services at the Customer's cost."
    },
]
const transitionOne = { duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] };

const transition = { duration: 1.5, ease: [0.165, 0.84, 0.44, 1] };


const headParentAnime = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1}
    }
  };

//child single animation
const headSingleAnime = {
    hidden : {
        opacity: 0, rotateX: 75, rotateY: 10, rotateZ: -9
    },
    visible : {
        opacity: 1, rotateX: 0, rotateY: 0, rotateZ: 0 
       
    },           
}

const Faq = () => {
    const [expanded, setExpanded] = useState(0);
    const animation = useAnimation();
      const [faqRef, inView] = useInView({
          
          rootMargin: "-20%"
      })

      useEffect(() => {
          if(inView) {
              animation.start("visible")
          }
      }, [animation, inView]);
    return (
        <FaqWrap id="faq-div">
            <Container>
            <FaqWrapInner>
                <FaqTitle>
                <motion.h1
                    ref={faqRef}
                    animate={animation}
                    variants={headParentAnime}
                    initial="hidden"
                    visible={{
                        opacity: 1,
                        transition: { staggerChildren: 0.1, delayChildren: 0.8 }
                    }}
                    >
                    <motion.div
                    variants={headSingleAnime}
                    transition={transition}
                    >Frequently</motion.div>
                    <motion.div
                    variants={headSingleAnime}
                    transition={transition}
                    >Asked</motion.div>
                     <motion.div
                    variants={headSingleAnime}
                    transition={transition}
                    >Questions</motion.div>
                    </motion.h1>
                </FaqTitle>
                <FaqInfo>
                {faqList.map((details, index) => (
                    <FaqAccordion
                      key={index}
                      details={details}
                      expanded={expanded}
                      setExpanded={setExpanded}
                    />
                  ))}
                </FaqInfo>
            </FaqWrapInner>
            </Container>
        </FaqWrap>
    );
}

//accordion

const FaqAccordion = ({ details, expanded, setExpanded }) => {
  const isOpen = details.id === expanded;
  return (
      <>
      <FaqHeader onClick={() => setExpanded(isOpen ? false : details.id)}>
        <FaqQuestion><h3>{details.title}</h3></FaqQuestion>
        <FaqIcon>
          <motion.span
            animate={{ rotate: isOpen ? 0 : 45, x: 3.5 }}
            transition={transitionOne}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen ? 0 : -45, x: -3.5 }}
            transition={transitionOne}
          ></motion.span>
        </FaqIcon>
      </FaqHeader>
      <FaqAnswer
      key="content"
      animate={{ height: isOpen ? "100%" : "0" }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        <h3>&#8226; {details.item}</h3>
      </FaqAnswer>
      </>
    );
};

export default Faq;
