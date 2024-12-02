import "./HeroImgStyles7.css";
import React, {useEffect, useRef} from 'react';
import { Link } from "react-router-dom";
import TextBox from "./TextBox.js";
import gsap from "gsap";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

import seed from "../assets/seed.jpg";
import fog_4 from "../assets/fog_4.png";

function HeroImg7() {
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
      duration: 0.50,
    });
  };

});

  return (
    <div className="hero">
        <div className="mask_7">
            <div className="vignette hide"></div>
            <img className="parallax seed" ref={bg_img_ref} src={seed} data-speedx="0.15" data-speedy="0.15" data-rotation="0" alt="background"/>
            <TextBox title="Buried Seed, Unveiled Potential" text={`Buried deep in the soil, the seed rests,
                in darkness, it waits, yet it holds boundless potential.
                Unseen, but alive, with the quiet wisdom of the earth,
                ready to unfold when the time is right.

                The warmth of sunlight and the touch of rain,
                nourish the seed, coaxing life to rise.
                From the depths of the earth, a small sprout emerges,
                reaching towards the light, seeking its true form.

                With patience, it grows, rooted firmly in the ground,
                each leaf unfurling with calm and clarity.
                The seed becomes the tree, just as the Buddha nature grows,
                slowly, steadily, until it stands in its full splendor.
            `}/>
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

export default HeroImg7;