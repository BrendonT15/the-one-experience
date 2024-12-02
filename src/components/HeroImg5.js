import "./HeroImgStyles5.css";
import React, {useEffect, useRef} from 'react';
import { Link } from "react-router-dom";
import TextBox from "./TextBox.js";
import gsap from "gsap";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

import lotus from "../assets/lotus.jpg";
import fog_4 from "../assets/fog_4.png";
import godrays from "../assets/sun_rays.png"

function HeroImg5() {
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
    <div className="hero">
        <div className="mask_5">
            <div className="vignette hide"></div>
            <img className="parallax lotus" ref={bg_img_ref} src={lotus} data-speedx="0.15" data-speedy="0.15" data-rotation="0" alt="background"/>
            <img className="godrays hide" src={godrays} alt="godrays"/>
            <TextBox title="Lotus in the Dark" text={`Amid the suffocating darkness,
                    where anguish clings like a second skin,
                    a flower rises—
                    its petals, soft as whispers,
                    unfold against the black void.

                    If you surrender to the void,
                    the flower wilts,
                    its light swallowed by the endless night.
                    But when you let compassion flow,
                    it transforms the shadows into a gentle glow,
                    drawing strength from the very desolation that once threatened it.

                    Compassion blooms here,
                    not as a fleeting act,
                    but as a force—unyielding, enduring,
                    offering its beauty without hesitation,
                    a defiant reminder
                    that even in the heart of suffering,
                    there is a place for grace.`}/>
            <img className="fog_left" ref={fog_left_ref} src={fog_4} alt="fog_left"/>
            <img className="fog_right" ref={fog_right_ref} src={fog_4} alt="fog_right"/>
            <div className="arrow_up hide">
                <Link to="/page-five" className="arrow-link"><FaAngleUp size={40}/></Link>
            </div>
            <div className="arrow_down hide">
                <Link to="/page-three" className="arrow-link"><FaAngleDown size={40}/></Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg5;