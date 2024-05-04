import "./HeroImgStyles.css";
import { Link } from "react-router-dom";
import React, { useEffect, useRef} from "react";
import { gsap } from "gsap";
import { FaAngleUp } from "react-icons/fa";

import background from "../assets/background.png"
import fog_1 from "../assets/fog_1.png"
import fog_2 from "../assets/fog_2.png"
import fog_3 from "../assets/fog_3.png"
import fog_4 from "../assets/fog_4.png"
import fog_5 from "../assets/fog_5.png"
import fog_6 from "../assets/fog_6.png"
import fog_7 from "../assets/fog_7.png"
import mountain_1 from "../assets/mountain_1.png"
import mountain_2 from "../assets/mountain_2.png"
import mountain_3 from "../assets/mountain_3.png"
import mountain_4 from "../assets/mountain_4.png"
import mountain_5 from "../assets/mountain_5.png"
import mountain_6 from "../assets/mountain_6.png"
import mountain_7 from "../assets/mountain_7.png"
import mountain_8 from "../assets/mountain_8.png"
import mountain_9 from "../assets/mountain_9.png"
import mountain_10 from "../assets/mountain_10.png"
import godrays from "../assets/sun_rays.png"
import blackshadow from "../assets/black_shadow.png"

const HeroImg = () => {
    const containerRef = useRef(null);
    const h2_ref = useRef(null);
    const h1_ref = useRef(null);
    const timeline = gsap.timeline();
    
    useEffect(() => {
        const handleMouseMove = (e) => {
            const parallax_el = document.querySelectorAll(".parallax");

            let xValue = 0;
            let yValue = 0;

            if(timeline.isActive()) return;
    
            xValue = (e.clientX - window.innerWidth/2)/2;
            yValue = (e.clientY - window.innerHeight/2)/2;
    
            let rotateDegree = 0;
    
            parallax_el.forEach((el) => {
                let speedx = el.dataset.speedx;
                let speedy = el.dataset.speedy;
                let rotation = el.dataset.rotation;
    
                rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
    
                el.style.transform = `rotateY(${rotateDegree * rotation}deg) translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
            })
        }
        
        handleMouseMove({ clientX: 0, clientY: 0});

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    });

    useEffect(() => {
        const container = containerRef.current;
        const textH2 = h2_ref.current;
        const textH1 = h1_ref.current;
        const parallax_els = container.querySelectorAll(".parallax:not(.buddha):not(.mountain_11)");
        
        if(container){
            Array.from(parallax_els).filter((el) => !el.classList.contains("text"))
            .forEach((el) => {
                gsap.from(el, {
                    top: `${+el.offsetHeight / 2 + +el.dataset.distance}px`,
                    duration: 5,
                    ease: "power3.out",
                });
            });
        }
        
        if(textH1 && textH2){
            timeline.from(textH2, {
                y:  window.innerHeight - textH2.getBoundingClientRect().top + 600,
                duration: 3,
            }, "1.5"
            ).from(textH1, {
                y:  -150,
                opacity: 0,
                duration: 1.5,
            },"2.5"
            ).from(".hide", {
                opacity: 0,
                duration: 1.5,
            });
        };
        
    }, );

    return (
        <div className="hero">
            <div className="mask" ref={containerRef}>
                <div className="vignette hide"></div>
                <img className="parallax background-img" src={background} data-speedx="0.30" data-speedy="0.15" data-rotation="0" data-distance="300" alt="background-img"/>
                <img className="parallax fog_7" src={fog_7} data-speedx="0.27" data-speedy="0.32" data-rotation="0" data-distance="850" alt="fog_7"/>
                <img className="parallax mountain_10" src={mountain_10} data-speedx="0.195" data-speedy="0.305" data-rotation="0" data-distance="1400" alt="mountain_10"/>
                <img className="parallax fog_6" src={fog_6} data-speedx="0.25" data-speedy="0.28" data-rotation="0" data-distance="1400" alt="fog_6"/>
                <img className="parallax mountain_9" src={mountain_9} data-speedx="0.125" data-speedy="0.155" data-rotation="0.02" data-distance="1700" alt="mountain_9"/>
                <img className="parallax mountain_8" src={mountain_8} data-speedx="0.1" data-speedy="0.11" data-rotation="0.02" data-distance="1800" alt="mountain_8"/>
                <img className="parallax fog_5" src={fog_5} data-speedx="0.16" data-speedy="0.105" data-rotation="0" data-distance="1900" alt="fog_5"/>
                <img className="parallax mountain_7" src={mountain_7} data-speedx="0.1" data-speedy="0.1" data-rotation="0.07" data-distance="2100" alt="mountain_7"/>
                <div className="parallax text-parallax" data-speedx="0.07" data-speedy="0.07" data-rotation="0.11" data-distance="0">
                    <h1 ref={h1_ref}>SEEKING THE PATH</h1>
                    <h2 ref={h2_ref}>Inspired by Journey to the West</h2>
                </div>
                <img className="parallax mountain_6" src={mountain_6} data-speedx="0.065" data-speedy="0.05" data-rotation="0.12" data-distance="2300" alt="mountain_6"/>
                <img className="parallax fog_4" src={fog_4} data-speedx="0.135" data-speedy="0.32" data-rotation="0" data-distance="2400" alt="fog_4"/>
                <img className="parallax mountain_5" src={mountain_5} data-speedx="0.08" data-speedy="0.045" data-rotation="0.10" data-distance="2550" alt="mountain_5"/>
                <img className="parallax fog_3" src={fog_3} data-speedx="0.11" data-speedy="0.0245" data-rotation="0" data-distance="2800" alt="fog_3"/>
                <img className="parallax mountain_4" src={mountain_4} data-speedx="0.059" data-speedy="0.024" data-rotation="0.35" data-distance="3200" alt="mountain_4"/>
                <img className="parallax mountain_3" src={mountain_3} data-speedx="0.04" data-speedy="0.018" data-rotation="0.05" data-distance="3400" alt="mountain_3"/>
                <img className="parallax fog_2" src={fog_2} data-speedx="0.15" data-speedy="0.0115" data-rotation="0" data-distance="3600" alt="fog_2"/>
                <img className="parallax mountain_2" src={mountain_2} data-speedx="0.0235" data-speedy="0.013" data-rotation="0.15" data-distance="3800" alt="mountain_2"/>
                <img className="parallax mountain_1" src={mountain_1} data-speedx="0.027" data-speedy="0.018" data-rotation="0.20" data-distance="4000" alt="mountain_1"/>
                <img className="godrays hide" src={godrays} alt="godrays"/>
                <img className="blackshadow hide" src={blackshadow} alt="black_shadow"/>
                <div className="arrow hide"><Link to="/page-two" className="arrow-link"><FaAngleUp size={40}/></Link></div>
                <img className="parallax fog_1" src={fog_1} data-speedx= "0.12" data-speedy="0.01" data-distance="4200" alt="fog_1"/>
            </div>
        </div>
    );
};


export default HeroImg;