var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faLightbulb, faUtensils, faGlassMartiniAlt, faUsers, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
var Conference = function () {
    return (React.createElement("div", { className: "relative w-screen h-max min-h-screen bg-blue-50 overflow-hidden" },
        React.createElement("div", { className: "absolute inset-0" },
            React.createElement("div", { className: "relative w-full h-full" }, __spreadArray([], Array(1000), true).map(function (_, index) {
                var size = Math.random() * 10 + 10; // Random size between 10 and 30
                var step = 20; // Define step size to align icons
                var x = (index % step) * (100 / step); // Align icons horizontally
                var y = Math.floor(index / step) * (100 / step); // Align icons vertically
                var opacity = Math.random() * 0.6 + 0.2; // Random opacity between 0.1 and 0.4
                var icons = [
                    faBed, // Bed Icon
                    faLightbulb, // Light Icon
                    faUtensils, // Food Icon
                    faGlassMartiniAlt, // Bar Icon
                    faUsers, // Conference Icon
                    faCalendarCheck, // Event Center Icon
                ];
                var icon = icons[Math.floor(Math.random() * icons.length)];
                var colors = [
                    "#FDBA74", // Bed Icon
                    "#60A5FA", // Light Icon
                    "#34D399", // Food Icon
                    "#A78BFA", // Bar Icon
                    "#F87171", // Conference Icon
                    "#FBBF24", // Event Center Icon
                ];
                var color = colors[Math.floor(Math.random() * colors.length)];
                return (React.createElement(FontAwesomeIcon, { key: index, icon: icon, style: {
                        width: "".concat(size, "px"),
                        height: "".concat(size, "px"),
                        color: color,
                        position: "absolute",
                        top: "".concat(y, "%"),
                        left: "".concat(x, "%"),
                        opacity: opacity,
                    } }));
            }))),
        React.createElement("div", { className: " w- h-max flex relative flex-col min-h-screen justify-center items-center " },
            React.createElement(Header, null),
            React.createElement(Footer, null))));
};
export default Conference;
