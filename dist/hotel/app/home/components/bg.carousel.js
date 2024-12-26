"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
var BGCarousel = function () {
    var images = [
        "/images/bg.images/bg-01.jpg",
        "/images/bg.images/bg-02.jpg",
        "/images/bg.images/bg-03.jpg",
        "/images/bg.images/bg-04.jpg",
        "/images/bg.images/bg-05.jpg",
    ];
    var _a = useState(0), currentIndex = _a[0], setCurrentIndex = _a[1];
    // Automatically change slides
    useEffect(function () {
        var interval = setInterval(function () {
            setCurrentIndex(function (prev) { return (prev + 1) % images.length; });
        }, 5000); // Change every 5 seconds
        // Clear the interval when the component unmounts
        return function () { return clearInterval(interval); };
    }, [images.length]);
    return (React.createElement("div", { className: "relative w-full h-screen overflow-hidden" },
        React.createElement("div", { className: "flex transition-transform duration-700 ease-in-out", style: { transform: "translateX(-".concat(currentIndex * 100, "%)") } }, images.map(function (src, index) { return (React.createElement("div", { key: index, className: "flex-shrink-0 w-full h-screen relative" },
            React.createElement(Image, { src: src, alt: "Slide ".concat(index + 1), layout: "fill", objectFit: "cover", priority: true }))); }))));
};
export default BGCarousel;
