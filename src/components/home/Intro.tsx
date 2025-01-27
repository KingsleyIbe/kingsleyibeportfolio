import React, { useEffect } from 'react';
import { Link } from 'react-router';

const Intro = () => {
    const spark = (event: MouseEvent | TouchEvent) => {
        const sparkElement = document.createElement("i");
        const x = event instanceof MouseEvent ? event.pageX : event.touches[0].pageX;
        const y = event instanceof MouseEvent ? event.pageY : event.touches[0].pageY;
    
        sparkElement.style.left = `${x}px`;
        sparkElement.style.top = `${y}px`;
        sparkElement.style.scale = `${Math.random() * 2 + 1}`;
        sparkElement.style.setProperty("--x", getTransitionValue());
        sparkElement.style.setProperty("--y", getTransitionValue());
    
        document.body.appendChild(sparkElement);
    
        setTimeout(() => {
          document.body.removeChild(sparkElement);
        }, 2000);
      };
    
      const getTransitionValue = (): string => {
        return `${Math.random() * 400 - 200}px`;
      };
    
      useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
          spark(event);
        };
    
        const handleTouchStart = (event: TouchEvent) => {
          spark(event);
        };
    
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("touchstart", handleTouchStart);
    
        return () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("touchstart", handleTouchStart);
        };
      }, );
    
    return (
        <div className="w-[100%] px-5 md:px-[100px] pt-[150px] mb-[300px] md:mb-[150px]">
            <h1 className="text-[40px] md:text-8xl md:text-7xl xl:text-9xl font-bold opacity-[0.8]">Kingsley Ibe</h1>
            <p className="text-[30px] md:text-[50px] opacity-[0.6]" >I build things for the web</p>
            <Link to="/about-me" className="text-[20px] md:text-[35px] line hover:opacity-[0.6]">Read more about me → </Link>
        </div>
    );
};

export default Intro;
