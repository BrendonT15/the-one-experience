import "./HeroImgStyles6.css";
import React, {useEffect, useRef} from 'react';
import { Link } from "react-router-dom";
import TextBox from "./TextBox.js";
import gsap from "gsap";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

import autumn from "../assets/autumn.jpg";
import fog_4 from "../assets/fog_4.png";
import leaves_1 from "../assets/leaves_1.png";
import leaves_2 from "../assets/leaves_2.png";

function HeroImg6() {
  const fog_left_ref = useRef(null);
  const fog_right_ref = useRef(null);
  const leaves_1_ref = useRef(null);
  const leaves_2_ref = useRef(null);
  const bg_img_ref = useRef(null);

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
  };

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
    }, "0");

    timeline.from(".hide", {
      opacity: 0,
      duration: 0.50,
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
    <div className="hero">
        <div className="mask_6">
            <div className="vignette hide"></div>
            <img className="parallax autumn" ref={bg_img_ref} src={autumn} data-speedx="0.15" data-speedy="0.15" data-rotation="0" alt="background"/>
            <img className="parallax leaves_1" ref={leaves_1_ref} src={leaves_1} style={{opacity: 1}} data-speedx="0.094" data-speedy="0.0814" data-rotation="0.94" alt="leaves"/>
            <img className="parallax leaves_2" ref={leaves_2_ref} src={leaves_2} style={{opacity: 1}} data-speedx="0.12" data-speedy="0.12" data-rotation=".79" alt="leaves"/>
            <TextBox title="Ever-changing Leaves" text={`The autumn leaves of red and gold,
            Dancing in hues of amber and wine, 
            With each gentle breeze, a leaf takes flight,
            Gracefully twirling in the air,
            Watch as they gradually wilt away,
            Their grand colors fade away with a subtle goodbye,
            Impermanent yet immortal,
            Awaiting to be born anew by nature's hand,
            For our flame waits to reignite,
            Perhaps we shall meet in our next lives,
            Only destiny will decide...`}/>
            <img className="fog_left" ref={fog_left_ref} src={fog_4} alt="fog_left"/>
            <img className="fog_right" ref={fog_right_ref} src={fog_4} alt="fog_right"/>
            <div className="arrow_up hide">
                <Link to="/page-seven" className="arrow-link"><FaAngleUp size={40}/></Link>
            </div>
            <div className="arrow_down hide">
                <Link to="/page-five" className="arrow-link"><FaAngleDown size={40}/></Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg6;