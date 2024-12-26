import React from 'react';
import InnerMap from './inner.map';
import Image from 'next/image';
import Link from 'next/link';
var InnerHome = function () {
    return (React.createElement("div", { className: "w-screen bg-blue-100 py-4 flex flex-col items-center justify-center " },
        React.createElement("div", { className: "w-screen h-max gap-5 flex flex-col items-center justify-center " },
            InnerMap.map(function (i, index) { return (React.createElement("div", { key: i.key, className: "w-full h-[70vh]  overflow-hidden " },
                React.createElement("div", { className: "w-full h-[70vh] flex items-center justify-between gap-5 ".concat(index % 2 === 0 ? 'flex-row' : 'flex-row-reverse') },
                    React.createElement(Image, { src: i.image, width: 500, height: 500, className: "w-[50%] h-auto object-cover", alt: "img" }),
                    React.createElement("div", { className: "w-[50%] h-max flex flex-col justify-center ".concat(index % 2 === 0 ? 'items-start' : 'items-end', " ") },
                        React.createElement("p", { className: "w-10/12 text-blue-900 text-2xl ".concat(index % 2 === 0 ? "text-left" : "text-right", " ") }, i.description.repeat(5)),
                        React.createElement(Link, { className: "bg-blue-900 rounded text-white hover:bg-blue-800 transition duration-300 ease-linear w-52 h-12 flex items-center justify-center font-extrabold", href: i.link }, i.redirect))))); }),
            React.createElement("div", { className: " w-full h-[40vh] gap-10 flex flex-col items-center justify-center " },
                React.createElement("h1", { className: " text-2xl font-extrabold text-blue-900 uppercase underline decoration-double " }, "or Book Using"),
                React.createElement("div", { className: " w-full h-max flex justify-evenly items-center " },
                    React.createElement(Link, { href: "" },
                        React.createElement(Image, { className: " w-40 h-auto ", src: "/images/book/booking.com.png", width: 100, height: 100, alt: "Booking.com" })),
                    React.createElement(Link, { href: "" },
                        React.createElement(Image, { className: " w-40 h-auto ", src: "/images/book/tripadvisor.png", width: 100, height: 100, alt: "Tripadvisor" })))))));
};
export default InnerHome;
