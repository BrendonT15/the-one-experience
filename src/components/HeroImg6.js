import "./HeroImgStyles6.css";
import React, {useEffect, useRef} from 'react';
import { Link } from "react-router-dom";
import TextBox from "./TextBox.js";
import gsap from "gsap";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

import singlepoint from "../assets/singlepoint.jpg";
import fog_4 from "../assets/fog_4.png";

function HeroImg6() {
  const fog_left_ref = useRef(null);
  const fog_right_ref = useRef(null);
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

});

  return (
    <div className="hero">
        <div className="mask_6">
            <div className="vignette hide"></div>
            <img className="parallax singlepoint" ref={bg_img_ref} src={singlepoint} data-speedx="0.15" data-speedy="0.15" data-rotation="0" alt="background"/>
            <TextBox title="The Lake Mind" text={`The lake lies still,
              A mirror reflecting all that surrounds it,
              Each image crisp, unbroken, untouched.

              A single tap disturbs the surface,
              Ripples radiate, shattering the clarity.
              The reflection wavers,
              Fragmented, chaotic, incomplete—
              The mind, unsteady, lost in movement.

              But with each passing moment,
              The ripples begin to fade.
              Focus returns, stillness takes hold,
              And the lake breathes calm once more.

              What was fractured becomes whole again,
              Tranquility pervades the surface,
              The reflection returns, undistorted, true—
              A mind centered, serene, unshaken.`}/>
            <img className="fog_left" ref={fog_left_ref} src={fog_4} alt="fog_left"/>
            <img className="fog_right" ref={fog_right_ref} src={fog_4} alt="fog_right"/>
            <div className="arrow_up hide">
                <Link to="/page-six" className="arrow-link"><FaAngleUp size={40}/></Link>
            </div>
            <div className="arrow_down hide">
                <Link to="/page-four" className="arrow-link"><FaAngleDown size={40}/></Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg6;