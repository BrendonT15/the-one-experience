import "./HeroImgStyles3.css"
import TextBox from "./TextBox"
import { Link } from "react-router-dom";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';

import background from "../assets/stream-reflection.jpg";
import fog_4 from "../assets/fog_4.png";
import fog_5 from "../assets/fog_5.png";
import fog_7 from "../assets/fog_7.png";
import lion from "../assets/mountain_lion.png";
import vine_1 from "../assets/vines_1.png";
import vine_2 from "../assets/vines_2.png";
import mountainbush_1 from "../assets/mountain_bush_1.png";
import mountainbush_2 from "../assets/mountain_bush_2.png";

function HeroImg3() {
  const fog_left_ref = useRef(null);
  const fog_right_ref = useRef(null);
  const bg_img_ref = useRef(null);
  const vine_1_ref = useRef(null);
  const vine_2_ref = useRef(null);

  let timeline = gsap.timeline();


  useEffect(() => {
      const handleMouseMove = (e) => {
          const parallax_el = document.querySelectorAll(".parallax");

          let xValue = 0;
          let yValue = 0;

          let rotateDegree = 0;

          if(timeline.isActive()) return;
  
          xValue = (e.clientX - window.innerWidth/2)/2;
          yValue = (e.clientY - window.innerHeight/2)/2;
  
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

    if(bg_img_ref.current){
        timeline.from(bg_img_ref.current, {
            y: -400,
            duration: 5,
            ease: "power3.out",
        })
    }

    if(fog_left_ref.current && fog_right_ref.current){
        timeline.to(fog_left_ref.current, {
            x: -2750,
            duration: 6,
            ease: "power2.out",
        }, "0")
        .to(fog_right_ref.current, {
            x: 2750,
            duration: 6,
            ease: "power2.out",
        }, "0").from(".hide", {
          opacity: 0,
          duration: 1.5,
      });
    };
});

  return (
    <div className= "hero">
      <div className= "mask_3">
        <div className="vignette hide"></div>
        <img className="parallax stream" ref={bg_img_ref} src={background} data-speedx="0.15" data-speedy="0.15" data-rotation="0" alt="background"/>
        <TextBox title="Mountain Tiger" text={`In the untamed wilderness, the mountain tiger reigns supreme amongst earthly beasts
          Their fiery golden eyes, inflicting fear into their prey
          Each stride is a testament to their unparalleled strength and speed,
          Its thunderous roar trembles the soul,
          Only the heavenly dragon can rival the tiger's prowess
          However, in this cosmos lies a greater danger,
          A double-edged sword known as man, 
          Be careful of what you perceive, 
          As trickery lies behind their words, 
          The intetions of man are ambiguous, 
          Now heed my words,
          Take a step away from the tiger, but take two steps away from man...`}/>
        <img className="parallax vine_1" ref={vine_1_ref} src={vine_1} data-speedx="0.25" data-speedy="0.17" data-rotation="0.10" alt="vine_1"/>
        <img className="parallax vine_2" ref={vine_2_ref} src={vine_2} data-speedx="0.26" data-speedy="0.18" data-rotation="0.08" alt="vine_2"/>
        <img className="parallax bush_1" src={mountainbush_1} data-speedx="0.070" data-speedy="0.035" data-rotation="0.20" alt="bush_1"/>
        <img className="parallax bush_2" src={mountainbush_2} data-speedx="0.050" data-speedy="0.025" data-rotation="0.15" alt="bush_2"/>
        <img className="parallax bush_3" src={mountainbush_2} data-speedx="0.065" data-speedy="0.020" data-rotation="0.23" alt="bush_1"/>
        <img className="parallax fog_5" src={fog_5} data-speedx="0.35" data-speedy="0.105" data-rotation="0.35" alt="fog_5"/>
        <img className="parallax lion" src={lion} data-speedx="0.070" data-speedy="0.053" data-rotation="0.15" alt="lion"/>
        <img className="parallax fog_7" src={fog_7} data-speedx="0.37" data-speedy="0.120" data-rotation="0.030" alt="fog_7"/>
        <img className="fog_left" ref={fog_left_ref} src={fog_4} alt="fog_left"/>
        <img className="fog_right" ref={fog_right_ref} src={fog_4} alt="fog_right"/>
        <div className="arrow_up hide">
            <Link to="/page-four" className="arrow-link"><FaAngleUp size={40}/></Link>
        </div>
        <div className="arrow_down hide">
            <Link to="/page-two" className="arrow-link"><FaAngleDown size={40}/></Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg3;

