"use client";
import React from "react";
import BGCarousel from "./components/bg.carousel";
import Header from "../components/header/header";
// import Link from "next/link"
import { FaChevronDown } from "react-icons/fa6";
import InnerHome from "./components/inner.home/inner.home";
import Footer from "../components/footer/footer";
var _Home = function () {
    var scrollToInnerHome = function () {
        var _a;
        (_a = document.getElementById("inner-home")) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    };
    return (React.createElement("div", { className: "w-screen h-max flex flex-col overflow-x-hidden" },
        React.createElement("div", { className: "  " },
            React.createElement("div", { className: "absolute -z-10 bg-[#00000066] w-screen h-[100vh] overflow-hidden" }),
            React.createElement("div", { className: "absolute -z-20 w-screen h-screen overflow-hidden" },
                React.createElement(BGCarousel, null))),
        React.createElement(Header, null),
        React.createElement("div", { className: "h-[83vh] w-screen flex justify-center items-center" },
            React.createElement("div", { className: "w-[60%] h-[60%] flex justify-center flex-col items-end" },
                React.createElement("div", { className: "w-full h-full flex justify-center items-center" },
                    React.createElement("div", { className: "w-40 h-[2px] bg-slate-400" }),
                    React.createElement("h1", { className: "text-white text-2xl text-center" },
                        "Welcome to Evita Hotel ",
                        React.createElement("br", null),
                        " Where our luxury meets your standard"),
                    React.createElement("div", { className: "w-40 h-[2px] bg-slate-400" })),
                React.createElement("div", { className: "w-full h-full flex justify-center items-center" },
                    React.createElement("button", { onClick: scrollToInnerHome, className: "text-white flex justify-center animate-bounce p-5 items-center border-2 border-white rounded-full hover:bg-[#fff6] hover:text-white transition duration-600 ease-linear" },
                        React.createElement("h1", { className: "text-[1.2rem] font-black bg-transparent uppercase" },
                            React.createElement(FaChevronDown, null)))))),
        React.createElement("div", { id: "inner-home", className: "w-screen " },
            React.createElement(InnerHome, null)),
        React.createElement(Footer, null)));
};
export default _Home;
