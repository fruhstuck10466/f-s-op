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
        title: "Do you offer deliveries outside Nairobi?",
        item: "Yes, We facilitate deliveries outside Nairobi through courier services. Please note that these services are at the customer's expense."
    },
    {
        id: 1,
        title: "What types of external pharmaceutical products do you manufacture?",
        item: "We manufacture a wide range of external pharmaceutical products, including topical creams, ointments, gels, lotions, all-purpose cleaners, surface disinfectants, antiseptics, hand sanitizers, liquid hand soaps, detergents, cosmetics, and laboratory reagents. Our products are designed for various therapeutic uses, such as pain relief, anti-inflammatory treatments, antifungal and antibacterial applications, and skincare."
    },
    {
        id: 2,
        title: "Are your products compliant with regulatory standards?",
        item: "Yes, all our products are manufactured in compliance with regulatory standards, including KEBS, and we dare to catch up on other relevant guidelines including ISO. We adhere to Good Manufacturing Practices (GMP) to ensure the highest quality and safety of our products."
    },
    {
        id: 3,
        title: "Can you provide custom formulation services?",
        item: "Yes, we offer custom formulation services to meet the specific needs of our clients. Our experienced R&D team can work with you to develop unique formulations tailored to your requirements."
    },
    {
        id: 4,
        title: "Do you conduct stability testing on your products?",
        item: "Yes, we conduct comprehensive stability testing on all our products to ensure they meet the necessary shelf-life and efficacy standards. Our stability testing includes a range of environmental conditions to simulate real-world storage and usage."
    },
    {
        id: 5,
        title: "What quality control measures do you have in place?",
        item: "We have stringent quality control measures in place at every stage of the manufacturing process. This includes raw material testing, in-process checks, and final product testing to ensure our products meet the highest quality standards."
    },
    {
        id: 6,
        title: "Do you offer contract manufacturing services?",
        item: "Yes, we offer contract manufacturing services for a variety of external pharmaceutical products. Our state-of-the-art facilities and experienced team allow us to handle large-scale production while maintaining quality and compliance."
    },
    {
        id: 7,
        title: "What is your approach to environmental sustainability?",
        item: "We are committed to environmental sustainability and implement eco-friendly practices throughout our manufacturing process. This includes waste reduction, energy-efficient production methods, and the use of sustainable raw and paackaging materials wherever possible."
    },
    {
        id: 8,
        title: "How can I place an order or inquire about your products?",
        item: "To place an order or inquire about our products, you can contact our sales team via email or phone. Our contacts are available in the contacts page."
    },
    {
        id: 9,
        title: "What kind of packaging options do you offer?",
        item: "We offer a variety of packaging options to suit the needs of our clients, including jerrycans, jars and bottles. We also provide customized packaging solutions to meet specific branding and regulatory requirements."
    },
    {
        id: 10,
        title: "Do you provide technical support and documentation?",
        item: "Yes, we provide comprehensive technical support and documentation for all our products. This includes Certificates of Analysis (CoAs), Material Safety Data Sheets (MSDS), and technical data sheets."
    },
    {
        id: 11,
        title: "Can you help with regulatory submissions?",
        item: "Yes, we have a dedicated regulatory affairs team that can assist with regulatory submissions and ensure compliance with regulations."
    },
    {
        id: 12,
        title: "What are your lead times for product delivery?",
        item: "Lead times for product delivery vary depending on the complexity of the order and current production schedules. We strive to provide timely delivery and will communicate expected lead times upon order confirmation."
    },
    {
        id: 13,
        title: "Do you offer samples of your products",
        item: "Yes, we can provide samples of our products for evaluation. Please contact our sales team to request samples and discuss your specific needs."
    },
    {
        id: 14,
        title: "Are your products cruelty-free and vegan?",
        item: "Many of our products are cruelty-free and do not contain animal-derived ingredients. Please check specific product details or contact us for more information on our cruelty-free and vegan options."
    },
  {
      id: 15,
      title: "How do you ensure the safety and efficacy of your products?",
      item: "We ensure the safety and efficacy of our products through rigorous testing and quality control measures. This includes clinical testing, dermatological testing, and adherence to international safety standards."
  },
  {
      id: 16,
      title: "What is the recommended usage of a Specific Medication?",
      item: "Our products page provides detailed guidance on the proper use of each medication. However, we strongly advise consulting with a healthcare professional prior to using any medication for optimal safety and effectiveness."
  },
  {
    id: 17,
    title: "What does FAHOLO® stand for?",
    item: "Our company proudly stands on strong Christian principles. FAHOLO® is inspired by the first two letters of three enduring virtues from the Bible verse 1 Corinthians 13:13 (NLT): Three things will last forever—faith, hope, and love—and the greatest of these is love."
  },
  ]
const transitionOne = { duration: 0.2, ease: [0.6, 0.05, 0, 0.9] };

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
                    >asked</motion.div>
                     <motion.div
                    variants={headSingleAnime}
                    transition={transition}
                    >questions 📌</motion.div>
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
      transition={{ duration: 0.8, ease: [0.6, 0.05, 0, 0.9] }}
      >
        <h3>&#8226; {details.item}</h3>
      </FaqAnswer>
      </>
    );
};

export default Faq;
