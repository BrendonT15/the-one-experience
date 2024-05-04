import "./TextBoxStyles.css";

import {React, useEffect, useRef} from 'react';
import gsap from "gsap";

function TextBox(props) {
  const textBoxRef = useRef(null);

  useEffect(() => {
    if(textBoxRef.current){
      gsap.from(textBoxRef.current, {
        opacity: 0,
        y: 250,
        duration: 2,
      })
    }
  })

  return (
    <div className="text-container" ref={textBoxRef}>
        <h1 className="poem-title">{props.title}</h1>
        <div className="poem-container">
            <p className="poem-text">{props.text}</p>
        </div>
    </div>
  )
}

export default TextBox;