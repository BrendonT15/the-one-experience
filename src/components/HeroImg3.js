import "./HeroImgStyles3.css"
import TextBox from "./TextBox"
import { Link } from "react-router-dom";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';

import river from "../assets/river.jpg";
import leaves_1 from "../assets/leaves_1.png";
import leaves_2 from "../assets/leaves_2.png";
import fog_4 from "../assets/fog_4.png";
import fog_5 from "../assets/fog_5.png";
import fog_7 from "../assets/fog_7.png";

function HeroImg3() {
  const fog_left_ref = useRef(null);
  const fog_right_ref = useRef(null);
  const bg_img_ref = useRef(null);
  const leaves_1_ref = useRef(null);
  const leaves_2_ref = useRef(null);

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

    if(leaves_1_ref.current && leaves_2_ref.current){
      timeline.from(leaves_1_ref.current,{
        opacity: 0,
        duration: 0.75,
      }).from(leaves_2_ref.current, {
        opacity: 0,
        duration: 0.50,
      });
    };
});

  return (
    <div className= "hero">
      <div className= "mask_3">
        <div className="vignette hide"></div>
        <img className="parallax river" ref={bg_img_ref} src={river} data-speedx="0.15" data-speedy="0.15" data-rotation="0" alt="background"/>
            <img className="parallax leaves_1" ref={leaves_1_ref} src={leaves_1} style={{opacity: 1}} data-speedx="0.094" data-speedy="0.0814" data-rotation="0.94" alt="leaves"/>
            <img className="parallax leaves_2" ref={leaves_2_ref} src={leaves_2} style={{opacity: 1}} data-speedx="0.12" data-speedy="0.12" data-rotation=".79" alt="leaves"/>
        <TextBox title="Flow of the Three Marks" text={`Plunge into the rushing embrace of the river,
          Pulled by unseen hands, the surge, the relentless tide—
          Struggle, and the current swallows you whole,
          Yield, and its chaos softens to a rhythmic dance.
          
          Impermanence occurs with each passing second,
          A moment gone, a new one born
          The water that once crashed is no longer the same—
          The river flows, endlessly becoming.

          The stones block the flow,
          But the water bends, crashes, or flows around.
          In acceptance, it moves forward,
          Adapting to every obstacle.

          No self is fixed—
          We are but droplets flowing down the same river...
          Be the current and the stillness,
          Be water.
          `}/>
        <img className="parallax fog_5" src={fog_5} data-speedx="0.35" data-speedy="0.105" data-rotation="0.35" alt="fog_5"/>
        <img className="parallax fog_7" src={fog_7} data-speedx="0.37" data-speedy="0.120" data-rotation="0.030" alt="fog_7"/>
        <img className="fog_left" ref={fog_left_ref} src={fog_4} alt="fog_left"/>
        <img className="fog_right" ref={fog_right_ref} src={fog_4} alt="fog_right"/>
        <div className="arrow_up hide">
            <Link to="/page-three" className="arrow-link"><FaAngleUp size={40}/></Link>
        </div>
        <div className="arrow_down hide">
            <Link to="/" className="arrow-link"><FaAngleDown size={40}/></Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg3;

