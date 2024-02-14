import React, {useEffect}  from 'react';
import Img from "gatsby-image";
import { useStaticQuery, graphql, Link } from "gatsby";
import { useAnimation, motion } from 'framer-motion';

//intersection observer
import {useInView} from "react-intersection-observer"

import {HomeAboutWrap, HomeAboutWrapInner, HomeAboutText, HomeAboutImage, HomeAboutImageInner} from "../../styles/homeAboutStyles"
import {BtnStyle} from "../../styles/globalStyles"

const HomeAbout = () => {
    const data = useStaticQuery(graphql`
    query {
      faholoFrontImage: file(relativePath: { eq: "f-f.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
      `);

      const animation = useAnimation();
      const [prodTitleRef, inView] = useInView({
          triggerOnce: true,
          rootMargin: "-10%"
      })

      useEffect(() => {
          if(inView) {
              animation.start("visible")
          }
      }, [animation, inView]);

    return (
        <HomeAboutWrap>
            <HomeAboutWrapInner>
                <HomeAboutText>
                <motion.h1
                    ref={prodTitleRef}
                    animate={animation}
                    initial="hidden"
                    variants={{
                        visible: {
                            opacity: 1,
                            y: 0,
                            skewY: 0,
                            transition: {
                                duration: 1,
                                ease: [0.165, 0.84, 0.44, 1],
                              }
                        },
                        hidden: {
                            opacity: 0, y: 72,skewY: 7,
                        }
                    }}
                    >
                    <div
                    
                    >Our Journey</div>
                    </motion.h1>
                    <motion.h3
                    ref={prodTitleRef}
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
                    >Established in 2015,
                     we have grown to <br/> be part of Kenya’s & 
                     East Africa’s known <br/> and trusted Chemical brands,
                     setting <br/> ambitious goals for the
                     future to be <br/> a competitive global 
                     player.
                    </motion.h3>
                    <BtnStyle>
                    <Link to="/about" >
                    <button>
                    <span>Explore About</span>
                    </button></Link>
                    </BtnStyle>
                </HomeAboutText>
                <HomeAboutImage>
                    <HomeAboutImageInner>
                    <Img
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        objectFit: "cover",
                        objectPosition: "center center",
                        width: "100%",
                        height: "100%",
                      }}
                    fluid={data.faholoFrontImage.childImageSharp.fluid}
                    alt="faholo-front-gate"
                  />
                    </HomeAboutImageInner>
                </HomeAboutImage>
            </HomeAboutWrapInner>
        </HomeAboutWrap>
    );
}

export default HomeAbout;
