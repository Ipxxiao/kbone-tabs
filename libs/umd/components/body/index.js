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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
    var react_1 = __importStar(require("react"));
    require("./index.scss");
    function TabBody(props) {
        var children = props.children, tabIndex = props.tabIndex;
        var className = 'md-tabs-body';
        if (process.env.isMp) {
            className = (props.class || '') + " " + className;
        }
        else {
            className = (props.className || '') + " " + className;
        }
        return (react_1.default.createElement(react_1.Fragment, null, process.env.isMp ?
            react_1.default.createElement("wx-swiper", __assign({}, props, { className: className, current: tabIndex, role: "tabbody" }), children)
            :
                react_1.default.createElement("div", __assign({}, props, { className: className, role: "tabbody" }), children)));
    }
    TabBody.tabsRole = 'TabBody';
    exports.default = react_1.default.memo(TabBody);
});
//# sourceMappingURL=index.js.map