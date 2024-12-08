import { useState, useEffect } from "react";
import React from "react";
import "./home.css";

const tablesArr = ['coffee', 'console', 'dining', 'computer', 'office', 'side', 'edge', 'outdoor'];

function createArrTables(arr, number = arr.length) {
    let tablesLink = arr.map((table) =>
                `/imgs/tables/${table} table.jpg`
            );
    return tablesLink.slice(0, number);
}

const sliderRow = 4;

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loopDirection, setLoopDirection] = useState(1);

    const imageList = createArrTables(tablesArr);
    const imageList2 = createArrTables(tablesArr, 5);
    const maxIndex = imageList.length - sliderRow;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex < maxIndex ? prevIndex + 1 : prevIndex
        );
      };
    
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
    };

    useEffect(() => {
        const loopTimer = setInterval(() => {
            if (loopDirection) {
                if (currentIndex < maxIndex) {
                    setCurrentIndex((prevIndex) => prevIndex + 1);
                } else {
                    setLoopDirection(0);
                }
                } else {
                if (currentIndex > 0) {
                    setCurrentIndex((prevIndex) => prevIndex - 1);
                } else {
                    setLoopDirection(1);
                }
            }
        }, 5000);

        return () => clearInterval(loopTimer);
    }, [currentIndex, loopDirection, maxIndex])

    return (<>
        <div className="Home">    
            <section className="slider-section">
                <div className="slider-wrapper">
                    <div className="slider-container" style={{transform: `translateX(-${currentIndex * (100 / sliderRow)}%)`,}}>{
                        imageList.map((image, index) => (
                            <img key={index} src={image} alt={`slide (${index})`} />
                        ))    
                    }</div>
                </div>
                <div className="slider-nav">
                    <button type="button" disabled={currentIndex === 0} onClick={prevSlide}>◀</button>
                    <div className="slider-nav-holder">{
                        Array.from({ length: maxIndex + 1 }).map((_, index) => (
                            <div key={index} className={`holder ${currentIndex === index ? "holder-active" : ""}`}></div>
                        ))
                    }</div>
                    <button type="button" onClick={nextSlide} disabled={currentIndex === maxIndex}>▶</button>
                </div>
            </section>
            <section className="about-us">
                <h2>About us</h2>
                <div className="about-us-wrapper">
                    <img src="/imgs/bin/about us.jpg" alt="about" />
                    <p>Some information about company that even dont exist. Still, why you even try to read this? That's nothing more than defaut text about nothing, yes really, stop read this it's not normal. Sereusly that's bad idea, stop this now and go do something good for this bad world. Aaaand you reading this, good, even I'm suprised that we have so... good(?) reader, hope you have so mutch free time hust for fun, gratz! Ok, I'm tired, stop for 3, 2, 1... ... ... STOP NOW! Ok, you can stay there as mutch, as you want I dont care, bye!!!</p>
                </div>
                <div className="about-us-tools">

                </div>
            </section>
            <section className="gallery-section">
                <div className="gallery-container">
                    {
                        imageList2.map((table, index) => (
                            <a key={index} className="gallery-info" href={`Store/${tablesArr[index]}`}>
                                <img key={index/0.33 + 1} src={table} alt={`table ${index}`} />
                                <p key={index/0.22 + 2} >{`Go to ${tablesArr[index]} table`}</p>
                            </a>
                        ))
                    }
                </div>
            </section>
        </div>
    </>)
}

export default Home;