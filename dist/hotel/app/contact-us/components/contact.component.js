"use client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import cn from 'classnames';
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
var ContactInfo = function () {
    var _a = useState(''), firstName = _a[0], setFirstName = _a[1];
    var _b = useState(''), lastName = _b[0], setLastName = _b[1];
    var _c = useState(''), email = _c[0], setEmail = _c[1];
    var _d = useState(''), subject = _d[0], setSubject = _d[1];
    var _e = useState(''), Message = _e[0], setMessage = _e[1];
    return (React.createElement("div", { className: "flex items-center w-screen mt-8 bg-blue-50 h-max text-blue-800 justify-center p-8 space-x-2" },
        React.createElement("form", { className: " flex p-11 rounded-md border shadow-sm bg-blue-50 my-10 flex-col space-y-2 ", action: " ", method: "post" },
            React.createElement("div", { className: " flex space-x-2 " },
                React.createElement(Input, { name: "firstName", value: firstName, onChange: function (e) { return setFirstName(e.target.value); }, placeholder: "First Name" }),
                React.createElement(Input, { name: "lastName", value: lastName, onChange: function (e) { return setLastName(e.target.value); }, placeholder: "Last Name" })),
            React.createElement(Input, { name: "email", value: email, onChange: function (e) { return setEmail(e.target.value); }, placeholder: "Email" }),
            React.createElement(Input, { name: "subject", value: subject, onChange: function (e) { return setSubject(e.target.value); }, placeholder: "Subject" }),
            React.createElement("textarea", { className: "border border-gray-300 rounded-md p-2 resize-none h-52 focus:outline-none ", name: "Message", value: Message, onChange: function (e) { return setMessage(e.target.value); }, placeholder: "Message" }),
            React.createElement("button", { type: "submit", className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" }, "Submit"))));
};
var inputClasses = {
    root: "group relative h-14 w-full rounded-md border border-[#a5a5a6] focus-within:border-primary focus-within:ring-1 focus-within:ring-primary",
    label: "absolute left-2 top-1/2 z-0 -translate-y-1/2 bg-white px-1 text-base pointer-events-none duration-200 group-focus-within:top-0 group-focus-within:text-xs group-focus-within:text-primary",
    input: "z-10 h-full w-full rounded-md px-3.5 py-4 outline-none",
};
function Input(_a) {
    var _b, _c;
    var placeholder = _a.placeholder, props = __rest(_a, ["placeholder"]);
    return (React.createElement("div", { className: inputClasses.root },
        React.createElement("label", { className: cnMerge([
                inputClasses.label,
                props.value && 'top-0 text-xs',
            ]), htmlFor: (_b = props.id) !== null && _b !== void 0 ? _b : props.name }, placeholder),
        React.createElement("input", __assign({ id: (_c = props.id) !== null && _c !== void 0 ? _c : props.name }, props, { className: inputClasses.input }))));
}
function cnMerge() {
    var classNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classNames[_i] = arguments[_i];
    }
    return twMerge(cn(classNames));
}
export default ContactInfo;
