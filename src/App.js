"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Navbar_1 = __importDefault(require("./components/layout/Navbar"));
var Hero_1 = __importDefault(require("./components/sections/Hero"));
var About_1 = __importDefault(require("./components/sections/About"));
var Skills_1 = __importDefault(require("./components/sections/Skills"));
var Projects_1 = __importDefault(require("./components/sections/Projects"));
var Experience_1 = __importDefault(require("./components/sections/Experience"));
var Education_1 = __importDefault(require("./components/sections/Education"));
var Contact_1 = __importDefault(require("./components/sections/Contact"));
var Footer_1 = __importDefault(require("./components/layout/Footer"));
require("./assets/projectAnimations.css");
require("./assets/modernUI.css");
function App() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white", children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsxs)("main", { children: [(0, jsx_runtime_1.jsx)(Hero_1.default, {}), (0, jsx_runtime_1.jsx)(About_1.default, {}), (0, jsx_runtime_1.jsx)(Skills_1.default, {}), (0, jsx_runtime_1.jsx)(Projects_1.default, {}), (0, jsx_runtime_1.jsx)(Experience_1.default, {}), (0, jsx_runtime_1.jsx)(Education_1.default, {}), (0, jsx_runtime_1.jsx)(Contact_1.default, {})] }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
}
exports.default = App;
