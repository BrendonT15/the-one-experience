import "./HeroImgStyles4.css";
import React, {useEffect, useRef} from 'react';
import { Link } from "react-router-dom";
import TextBox from "./TextBox.js";
import gsap from "gsap";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

import reflective from "../assets/reflective_lake.jpg";
import blackshadow from "../assets/black_shadow.png"
import fog_2 from "../assets/fog_2.png";
import fog_3 from "../assets/fog_3.png"
import fog_4 from "../assets/fog_4.png";
import moon from "../assets/bright_moon.png";

function HeroImg4() {
    const fog_left_ref = useRef(null);
    const fog_right_ref = useRef(null);
    const bg_img_ref = useRef(null);

    let timeline = gsap.timeline();


    useEffect(() => {
        const handleMouseMove = (e) => {
            const parallax_el = document.querySelectorAll(".parallax");
            const parallax_moon = document.querySelector(".moon");

            let xValue = 0;
            let yValue = 0;
  
            let rotateDegree = 1;
  
            if(timeline.isActive()) return;
    
            xValue = (e.clientX - window.innerWidth/2)/2;
            yValue = (e.clientY - window.innerHeight/2)/2;
    
            const yOffset = 50;
            const parabolaValue = Math.pow(xValue/50, 2) + yOffset;
            let moon_rotation = parallax_moon.dataset.rotation;
            const moonYOffset = 50;
            rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
            parallax_moon.style.transform = `rotateY(${rotateDegree * moon_rotation}deg) translate(calc(-50% + ${-xValue}px), calc(-50% + ${moonYOffset + parabolaValue}px))`;

            parallax_el.forEach((el) => {
                let speedx = el.dataset.speedx;
                let speedy = el.dataset.speedy;
  
                let rotation = el.dataset.rotation;
  
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
        <div className="mask_4">
            <div className="vignette hide"></div>
            <img className="parallax reflective" ref={bg_img_ref} src={reflective} data-speedx="0.15" data-speedy="0.15" data-rotation="0" alt="background"/>
            <img className="moon" src={moon} data-speedx="0.125" data-speedy="0" data-rotation="0.20" alt="bright_moon"/>
            <img className="parallax fog_2" src={fog_2} data-speedx="0.027" data-speedy="0.018" alt="fog_2"/>
            <TextBox title="Inverted World" text={`The Moon casts its enchanting glow upon the Earth,
            A shimmering veil illuminates the darkness, unraveling deep secrets hidden in the leaves
            For there is truth to shed light on,
            Seek the calmness of the lake, it embraces the mind
            It reflects the truth you seek,
            The lake is nature's perfect mirror,
            A flawless imitation of reality, 
            Inverting the world upside down,
            An endless domain stretching from one sky to another,
            Where dualities merge in seamless flow,
            Creating oneness in the cosmos,
            An inverted world with diverging binaries, yet all are interconnected`}/>
          <img className="parallax fog_3" src={fog_3} data-speedx="0.11" data-speedy="0.0245" data-rotation="0" alt="fog_3"/>
            <img className="fog_left" ref={fog_left_ref} src={fog_4} alt="fog_left"/>
            <img className="fog_right" ref={fog_right_ref} src={fog_4} alt="fog_right"/>
            <img className="blackshadow hide" src={blackshadow} alt="black_shadow"/>
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

export default HeroImg4;