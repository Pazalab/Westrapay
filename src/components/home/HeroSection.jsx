import { Link } from "react-router-dom"
import hero1 from "../../assets/hero1.jpg"
import hero2 from "../../assets/hero2.jpg"
import hero3 from "../../assets/hero3.jpg"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const heroRef = useRef();

    useEffect(() => {
            const firstImg = heroRef.current && heroRef.current.querySelector(".first");
            const lastImg = heroRef.current && heroRef.current.querySelector(".last");
            const middleImg = heroRef.current && heroRef.current.querySelector(".middle")
            let ctx = gsap.context(() => {
                    gsap.to(firstImg, {
                          rotate: "-10deg",
                          x: "-120%",
                          y: "-5%",
                          duration: 0.5,
                          scrollTrigger: {
                                trigger: heroRef.current,
                               start: "-80%",
                               end: "+=500",
                               scrub: true,
                         }
                    })
                  gsap.to(middleImg, {
                        width: "30%",
                        duration: 0.5,
                        scrollTrigger: {
                               trigger: heroRef.current,
                               start: "-80%",
                               scrub: true
                        }
                  })
                  gsap.to(lastImg, {
                          rotate: "10deg",
                          x: "120%",
                          y: "-5%",
                          duration: 0.5,
                          scrollTrigger: {
                              trigger: heroRef.current,
                               start: "-80%",
                               end: "+=500",
                               scrub: true,
                        }
                    })
            })

           return () => ctx && ctx.revert();
    }, [])
  return (
    <div className="hero-section">
              <div className="inner-row">
                      <div className="hero-section-content">
                                <div className="hero-texts">
                                         <h1>Your Gateway to Seamless Digital Transactions</h1>
                                         <p>Westrapay empowers businesses to send, receive and manage payments effortlessly, from local payouts to cross-border transactions, giving you the freedom to trade, grow and succeed beyond borders.</p>
                                         <Link to={"/"}>Get Started</Link>
                                </div>
                                <div ref={heroRef} className="hero-images">
                                           <div className="hero-image first" >
                                                    <img src={hero2} alt="" />
                                           </div>
                                           <div className="hero-image middle">
                                                    <img src={hero1} alt="" />
                                           </div>
                                           <div className="hero-image last">
                                                    <img src={hero3} alt="" />
                                           </div>
                                </div>
                      </div>
              </div>
    </div>
  )
}

export default HeroSection