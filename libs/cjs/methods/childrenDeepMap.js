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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepForEach = exports.deepMap = void 0;
var react_1 = require("react");
var elementTypes_1 = require("./elementTypes");
function isTabChild(child) {
    return elementTypes_1.isTabItem(child) || elementTypes_1.isTabHead(child) || elementTypes_1.isTabPanel(child) || elementTypes_1.isTabBody(child);
}
function deepMap(children, callback) {
    return react_1.Children.map(children, function (child) {
        // null happens when conditionally rendering TabPanel/Tab
        // see https://github.com/reactjs/react-tabs/issues/37
        if (child === null)
            return null;
        if (isTabChild(child)) {
            return callback(child);
        }
        if (child.props &&
            child.props.children &&
            typeof child.props.children === 'object') {
            // Clone the child that has children and map them too
            return react_1.cloneElement(child, __assign(__assign({}, child.props), { children: deepMap(child.props.children, callback) }));
        }
        return child;
    });
}
exports.deepMap = deepMap;
function deepForEach(children, callback) {
    return react_1.Children.forEach(children, function (child) {
        // null happens when conditionally rendering TabPanel/Tab
        // see https://github.com/reactjs/react-tabs/issues/37
        if (child === null)
            return;
        if (elementTypes_1.isTabItem(child) || elementTypes_1.isTabPanel(child)) {
            callback(child);
        }
        else if (child.props &&
            child.props.children &&
            typeof child.props.children === 'object') {
            if (elementTypes_1.isTabHead(child) || elementTypes_1.isTabBody(child))
                callback(child);
            deepForEach(child.props.children, callback);
        }
    });
}
exports.deepForEach = deepForEach;
//# sourceMappingURL=childrenDeepMap.js.map