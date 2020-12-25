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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
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
        define(["require", "exports", "react", "../uncontrolled"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = __importStar(require("react"));
    var uncontrolled_1 = __importDefault(require("../uncontrolled"));
    var canUseActiveElement;
    try {
        canUseActiveElement = !!(typeof window !== 'undefined' &&
            window.document &&
            window.document.activeElement);
    }
    catch (e) {
        // Work around for IE bug when accessing document.activeElement in an iframe
        // Refer to the following resources:
        // http://stackoverflow.com/a/10982960/369687
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12733599
        canUseActiveElement = false;
    }
    function Tabs(props) {
        var children = props.children, defaultIndex = props.defaultIndex, attributes = __rest(props, ["children", "defaultIndex"]);
        var className = 'md-tabs';
        var _a = __read(react_1.useState(0), 2), selectedIndex = _a[0], setSelectedIndex = _a[1];
        if (selectedIndex != null) {
            attributes.selectedIndex = selectedIndex;
        }
        if (process.env.isMp) {
            attributes.className = (props.class || '') + " " + className;
        }
        else {
            attributes.className = (props.className || '') + " " + className;
        }
        function handleSelected(index, last, event) {
            var onSelect = props.onSelect;
            // const { mode } = state
            // Call change event handler
            if (typeof onSelect === 'function') {
                // Check if the change event handler cancels the tab change
                if (onSelect(index, last, event) === false)
                    return;
            }
            // if (mode === MODE_UNCONTROLLED) {
            //   // Update selected index
            //   state.selectedIndex = index
            // }
            if (props.selectedIndex == null) {
                // Update selected index
                setSelectedIndex(index);
            }
        }
        return (react_1.default.createElement(uncontrolled_1.default, __assign({}, attributes, { onSelect: handleSelected }), children));
    }
    Tabs.tabsRole = 'Tabs';
    exports.default = react_1.default.memo(Tabs);
});
//# sourceMappingURL=index.js.map