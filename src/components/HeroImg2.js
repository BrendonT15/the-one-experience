import "./HeroImgStyles2.css"
import React, {useEffect, useRef} from 'react';
import { Link } from "react-router-dom";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { gsap } from "gsap";
import TextBox from "./TextBox";

import background from "../assets/treacherous-path.jpg";
import blackshadow from "../assets/black_shadow.png";
import fog_2 from "../assets/fog_2.png";
import fog_4 from "../assets/fog_4.png";
import fog_5 from "../assets/fog_5.png";
import fog_7 from "../assets/fog_7.png";

function HeroImg2() {
    const fog_left_ref = useRef(null);
    const fog_right_ref = useRef(null);
    const bg_img_ref = useRef(null);

    let timeline = gsap.timeline();


    useEffect(() => {
        const handleMouseMove = (e) => {
            const parallax_el = document.querySelectorAll(".parallax");

            let xValue = 0;
            let yValue = 0;

            if(timeline.isActive()) return;
    
            xValue = (e.clientX - window.innerWidth/2)/2;
            yValue = (e.clientY - window.innerHeight/2)/2;
    
            //let rotateDegree = 0;

            parallax_el.forEach((el) => {
                let speedx = el.dataset.speedx;
                let speedy = el.dataset.speedy;
                //let rotation = el.dataset.rotation;

                el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
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
        <div className="mask_2">
            <div className="vignette hide"></div>
            <img className="parallax path" ref={bg_img_ref} src={background} data-speedx="0.15" data-speedy="0.15" data-rotation="0" alt="background"/>
            <TextBox title="Where is the Path?" text={`The path has yet to be walked, as nature's obstacles appear daunting,
            Mountain peaks reach the heavens, in which no man dares to climb,
            Thunderclouds paint the sky gray, revealing Heaven's rage
            For the Three Calamities follow,
            Thunderous Lightning strikes,
            Blazing Wildfires dance,
            Gales of Wind sever the atmosphere,
            Thick fogs blanket the ground, 
            Oblivious to reality, falsehood shrouds the minds
            Despite hesitation upon uncertainty, continue to walk on...`}/>
            <img className="parallax fog_2" src={fog_2} data-speedx="0.027" data-speedy="0.018" alt="fog_2"/>
            <img className="parallax fog_5" src={fog_5} data-speedx="0.35" data-speedy="0.105" alt="fog_5"/>
            <img className="parallax fog_7" src={fog_7} data-speedx="0.37" data-speedy="0.120" alt="fog_7"/>
            <img className="fog_left" ref={fog_left_ref} src={fog_4} alt="fog_left"/>
            <img className="fog_right" ref={fog_right_ref} src={fog_4} alt="fog_right"/>
            <img className="blackshadow hide" src={blackshadow} alt="blackshadow"/>
            <div className="arrow_up hide">
                <Link to="/page-three" className="arrow-link"><FaAngleUp size={40}/></Link>
            </div>
            <div className="arrow_down hide">
                <Link to="/" className="arrow-link"><FaAngleDown size={40}/></Link>
            </div>
        </div>
    </div>
  );
};

export default HeroImg2;