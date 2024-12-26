import "./globals.css";
import "./assets/fonts.css";
export var metadata = {
    title: "Evita Hotel",
    description: "Hotel Booking App",
};
export default function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: " antialiased scroll-smooth overflow-x-hidden w-screen h-screen " }, children)));
}
