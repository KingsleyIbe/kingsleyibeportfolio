import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { blog } from "./db.ts";
import "./carousel.css";


const Carousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    // Automatically move to the next slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % blog?.length);
        }, 5000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    const navigateToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="carousel mb-[100px] text-[#fff]">
            <div
                className="carousel-slide"
                style={{
                    backgroundImage: `url(${blog[currentSlide]?.backgroundImage})`,
                }}
            >
                <div className="z-10 w-[80%] mt-[150px] m-auto">
                    <h1 className="text-[40px] font-bold text-center mb-10">{blog[currentSlide]?.title}</h1>
                    <p className="text-center">{blog[currentSlide]?.description}</p>
                </div>
                <div className="flex flex-row justify-between items-center mt-[150px] px-[100px] pt-[150px ">
                    <div className="flex flex-row gap-10 items-center">
                        <Link to={blog[currentSlide].href} target="__blank" className="border p-2 rounded-[8px]">Read Article</ Link>
                        <ul><li className="list-disc">{blog[currentSlide].readTime}</li></ul>
                    </div>
                    <div>
                        <p>{blog[currentSlide].date}</p>
                    </div>
                </div>
            </div>

            {/* Dot Navigation */}
            <div className="carousel-dots">
                {blog?.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? "active" : ""}`}
                        onClick={() => navigateToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
