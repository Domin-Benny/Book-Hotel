import Link from 'next/link';
import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';
var FooterComponents = function () {
    return (React.createElement("div", { className: " w-[96vw] flex justify-between items-center mb-5 " },
        React.createElement("div", { className: " w-1/4 flex flex-col justify-center items-center gap-3 list-none " },
            React.createElement("li", { className: " text-2xl font-extrabold " }, "Services"),
            React.createElement("li", null, "Events"),
            React.createElement("li", null, "Conference"),
            React.createElement("li", null, "Lodge"),
            React.createElement("li", null, "Restaurant")),
        React.createElement("div", { className: " w-1/4 flex flex-col justify-center items-center gap-3 list-none " },
            React.createElement("li", { className: " text-2xl font-extrabold " }, "Partners"),
            React.createElement("li", null, "Tripadvisor"),
            React.createElement("li", null, "Booking.com"),
            React.createElement("li", null, "Airbnb"),
            React.createElement("li", null, "Agoda.com")),
        React.createElement("div", { className: " w-1/4 flex flex-col justify-center items-center gap-3 list-none " },
            React.createElement("li", { className: " text-2xl font-extrabold text-blue-950 select-none " }, "."),
            React.createElement("li", null, "About Us"),
            React.createElement(Link, { href: '/contact-us' }, "Contact Us"),
            React.createElement("li", null, "Terms & Conditions"),
            React.createElement("li", null, "Privacy Policy")),
        React.createElement("div", { className: " w-1/4 flex flex-col justify-center items-center gap-3 list-none " },
            React.createElement("li", { className: " text-2xl font-extrabold " }, "Follow Us"),
            React.createElement(Link, { href: "/" },
                React.createElement(FaFacebook, null)),
            React.createElement(Link, { href: "/" },
                React.createElement(FaXTwitter, null)),
            React.createElement(Link, { href: "/" },
                React.createElement(FaInstagram, null)),
            React.createElement(Link, { href: "/contact-us" },
                React.createElement(FaEnvelope, null)))));
};
export default FooterComponents;
