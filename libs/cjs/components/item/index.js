"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
function TabItem(props) {
    var _a;
    var children = props.children, disabled = props.disabled, disabledClassName = props.disabledClassName, panelId = props.panelId, selected = props.selected, tabIndex = props.tabIndex, tabRef = props.tabRef, _b = props.selectedClassName, selectedClassName = _b === void 0 ? 'on' : _b, attributes = __rest(props, ["children", "disabled", "disabledClassName", "panelId", "selected", "tabIndex", "tabRef", "selectedClassName"]);
    var nowNode;
    var className = 'md-tabs-item';
    if (process.env.isMp) {
        attributes.className = (props.class || '') + " " + className;
    }
    else {
        attributes.className = (props.className || '') + " " + className;
    }
    return (react_1.default.createElement("div", __assign({}, attributes, { className: classnames_1.default(attributes.className, (_a = {},
            _a[selectedClassName] = selected,
            _a)), role: "tabitem", "aria-selected": selected ? 'true' : 'false', "aria-disabled": disabled ? 'true' : 'false', "aria-controls": panelId, tabIndex: tabIndex || (selected ? 0 : undefined) }), children));
}
TabItem.tabsRole = 'TabItem';
exports.default = react_1.default.memo(TabItem);
//# sourceMappingURL=index.js.map