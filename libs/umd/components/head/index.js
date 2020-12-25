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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "./index.scss"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = __importDefault(require("react"));
    require("./index.scss");
    function TabHead(props) {
        var children = props.children;
        var className = 'md-tabs-head';
        if (process.env.isMp) {
            className = (props.class || '') + " " + className;
        }
        else {
            className = (props.className || '') + " " + className;
        }
        return (react_1.default.createElement("div", __assign({}, props, { className: className, role: "tabhead" }), children));
    }
    TabHead.tabsRole = 'TabHead';
    exports.default = react_1.default.memo(TabHead);
});
//# sourceMappingURL=index.js.map