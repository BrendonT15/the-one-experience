import "./HeroImgStyles5.css";
import React, {useEffect, useRef} from 'react';
import { Link } from "react-router-dom";
import TextBox from "./TextBox.js";
import gsap from "gsap";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

import summer from "../assets/summer.jpg";
import fog_4 from "../assets/fog_4.png";
import cicada from "../assets/golden_cicada.png";
import branch from "../assets/branch.png";
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
            <img className="parallax summer" ref={bg_img_ref} src={summer} data-speedx="0.15" data-speedy="0.15" data-rotation="0" alt="background"/>
            <img className="godrays hide" src={godrays} alt="godrays"/>
            <TextBox title="Summer Vision" text={`The intense summer heat blurs your vision,
            Rest by the useless tree and let it shade you from the sun,
            Close your eyes and let your senses guide you,
            Through whispers of the breeze, stories unfold
            Hear the rhythmic ticks from the Golden Cicadas,
            Listen to the gentle rustle of the leaves,
            Feel the rocky earth and the individual sediments beneath your feet,
            The floor padded by a grassy bed,
            Inhale the aromatic notes of blooming flowers,
            And the freshness of the misty air,
            Unseen beauty resides beyond perception,
            The joys of life gathered in one space,
            For this moment is short, 
            Be present in the moment and embrace nature's gifts...`}/>
            <img className="parallax cicada" src={cicada} data-speedx="0.085" data-speedy="0.084" data-rotation="0.5" alt="cicada"/>
            <img className="parallax branch" src={branch} data-speedx="0.093" data-speedy="0.094" data-rotation="0.4" alt="branch"/>
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

export default HeroImg5;