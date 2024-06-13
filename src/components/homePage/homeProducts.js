import React, {useEffect} from 'react';
import Img from "gatsby-image";
import { useStaticQuery, graphql, Link } from "gatsby";
//framer
import { useAnimation, motion } from 'framer-motion';

//intersection observer
import {useInView} from "react-intersection-observer"


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { HomeProdWrap, HomeProdWrapInner, HomeProdImage, SliderInner, DragText, HomeProdText } from '../../styles/homeProductsStyles';
import {BtnStyle} from "../../styles/globalStyles"

const transition = { duration: 1.5, ease: [0.165, 0.84, 0.44, 1] };


const headParentAnime = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1}
    }
  };

//child single animation
const headSingleAnime = {
    hidden : {
        opacity: 0,
        y: 75,
        skewY: 7,
    },
    visible : {
        opacity: 1,
        y: 0,
        skewY: 0,
       
    },           
}

const HomeProducts = () => {
const data = useStaticQuery(graphql`
    query {
      detergentCategoryImage: file(relativePath: { eq: "detergents.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      disinfectantCategoryImage: file(
        relativePath: { eq: "disinfectant.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      antisepticCategoryImage: file(relativePath: { eq: "antiseptic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cosmeticsCategoryImage: file(relativePath: { eq: "cosmetics.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sanitizerCategoryImage: file(relativePath: { eq: "sanitizer.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      othersCategoryImage: file(relativePath: { eq: "other.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
      };

      const animation = useAnimation();
      const [contentRef, inView] = useInView({
          triggerOnce: true,
          rootMargin: "-10%"
      })

      useEffect(() => {
          if(inView) {
              animation.start("visible")
          }
      }, [animation, inView]);

    return (
        <HomeProdWrap 
        id="prod-div">
            <HomeProdWrapInner>
                <DragText><p>Drag Image to Explore Products</p></DragText>
                <HomeProdImage>
                <h1 className="bopp" >
                    <div>Excellence Delivered</div>
                    <div>in Every Pharmaceutical</div>
                    <div>& Chemical Product 📦</div>
                    </h1>
                        <Slider
                        {...settings}
                        className="bop"
                        >
                        <SliderInner>
                  <p>1/6 | Disinfectants</p>
                  <Img
                    fluid={data.disinfectantCategoryImage.childImageSharp.fluid}
                    alt="Disinfectants"
                  />
                </SliderInner>
                <SliderInner>
                  <p>2/6 | Detergents</p>
                  <Img
                    fluid={data.detergentCategoryImage.childImageSharp.fluid}
                    alt="Detergents"
                  />
                </SliderInner>
                <SliderInner>
                  <p>3/6 | Antiseptics</p>
                  <Img
                    fluid={data.antisepticCategoryImage.childImageSharp.fluid}
                    alt="Antiseptics"
                  />
                </SliderInner>
                <SliderInner>
                  <p>4/6 | Cosmetics</p>
                  <Img
                    fluid={data.cosmeticsCategoryImage.childImageSharp.fluid}
                    alt="Cosmetics"
                  />
                </SliderInner>
                <SliderInner>
                  <p>5/6 | Sanitizers</p>
                  <Img
                    fluid={data.sanitizerCategoryImage.childImageSharp.fluid}
                    alt="Sanitizing solutions"
                  />
                </SliderInner>
                <SliderInner>
                  <p>6/6 | Others + Reagents</p>
                  <Img
                    fluid={data.othersCategoryImage.childImageSharp.fluid}
                    alt="other solutions"
                  />
                </SliderInner>
                        </Slider>
            
                </HomeProdImage>
                <HomeProdText>
                    <motion.h1
                    ref={contentRef}
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
                    >Excellence Delivered </motion.div>
                    <motion.div
                    variants={headSingleAnime}
                    transition={transition}
                    >in Every Pharmaceutical</motion.div>
                    <motion.div
                    variants={headSingleAnime}
                    transition={transition}
                    >& Chemical Product 📦</motion.div>
                    </motion.h1>
                    <motion.h3
                    ref={contentRef}
                    animate={animation}
                    initial="hidden"
                    variants={{
                        visible: {
                            opacity: 1,
                            y: 0,
                            skewY: 0,
                            transition: {
                                duration: 0.6,
                                ease: [0.165, 0.84, 0.44, 1],
                              }
                        },
                        hidden: {
                            opacity: 0, y: 72,skewY: 7,
                        }
                    }}
    
                    >
                    Our product range includes all-purpose cleaners, surface disinfectants, antiseptics, hand sanitizers, liquid hand soaps, detergents, cosmetics, and laboratory reagents. Each product is designed to enhance well-being, showcasing our commitment to quality, integrity and customer service. Explore our diverse range of high-quality products designed to meet your needs.
                    </motion.h3>
                    <BtnStyle>
                    <Link to="/products" >
                    <button>
                    <span>Explore Catalogue</span>
                    </button></Link>
                    </BtnStyle>
                </HomeProdText>
            </HomeProdWrapInner>
        </HomeProdWrap>
    );
}

export default HomeProducts;
