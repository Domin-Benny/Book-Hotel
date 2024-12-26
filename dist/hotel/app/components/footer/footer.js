import React from 'react';
import FooterComponents from './components/footer.component';
var year = new Date().getFullYear();
var Footer = function () {
    return (React.createElement("div", { className: "w-screen h-[50vh] flex flex-col justify-center items-center bg-blue-950 " },
        React.createElement(FooterComponents, null),
        React.createElement("div", { className: "w-10/12  border-t border-gray-400 border-d " }),
        React.createElement("footer", { className: "w-10/12 h-[60px] flex justify-between items-center" },
            React.createElement("p", { className: "text-gray-400 text-sm" },
                "Copyright \u00A9 ",
                year,
                " "),
            React.createElement("i", { className: " not-italic " },
                React.createElement("p", { className: "text-gray-400  text-[40px] font-04 " }, "Evita "),
                React.createElement("p", { className: "text-gray-400 text-[13px] -mt-5 ml-6 " }, "Hotel ")))));
};
export default Footer;
