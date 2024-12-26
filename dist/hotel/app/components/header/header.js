import React from 'react';
import HeaderMap from './components/header.map';
import Link from 'next/link';
var Header = function () {
    return (React.createElement("header", { className: " w-screen h-[100px] flex justify-center items-center " },
        React.createElement("div", { className: " relative flex justify-center items-center h-[100px] w-11/12 " },
            React.createElement("div", { className: "  absolute left-[1rem] w-max p-5 -mt-5 pb-3 rounded-b-2xl bg-white border-2 border-blue-500 " },
                React.createElement(Link, { href: "/" },
                    React.createElement("h1", { className: " text-[4rem] text-black   font-04 " }, "Evita"),
                    React.createElement("h1", { className: " text-[1.2rem] mt-[-2rem] text-black ml-[2.5rem]  " }, "Hotel"))),
            React.createElement("div", { className: "  absolute right-[1rem] h-[110px] top- -m-5 w-max  p-5 flex items-end justify-center rounded-b-2xl bg-white border-2 border-blue-500 " },
                React.createElement(Link, { href: "/book", className: " text-black px-3 py-2 hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out rounded-sm  " },
                    React.createElement("h1", { className: " text-[1.2rem]  font-black bg-transparent uppercase " }, "Book"))),
            React.createElement("nav", { className: " w-max flex h-[100px] justify-center items-center " },
                React.createElement("div", { className: " w-full h-full flex justify-end items-center  " }, HeaderMap.map(function (h) { return (React.createElement(Link, { key: h.key, href: h.link, className: "mx-3 text-lg w-[8rem] h-12 border-2 bg-[#0b113636] border-blue-500 text-blue-500 rounded-md flex justify-center items-center hover:bg-[#00000066] transition duration-300 ease-in-out" }, h.title)); }))),
            React.createElement("nav", null))));
};
export default Header;
