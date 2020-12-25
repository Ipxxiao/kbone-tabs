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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var methods_1 = __importDefault(require("../../methods"));
var tiny_slider_1 = require("tiny-slider/src/tiny-slider");
require("tiny-slider/src/tiny-slider.scss");
var slider = null;
var sliderId = 'md-tabs-slider';
function UncontrolledTabs(props) {
    var children = props.children, className = props.className, disabledTabClassName = props.disabledTabClassName, // unused
    domRef = props.domRef, forceRenderTabPanel = props.forceRenderTabPanel, // unused
    onSelect = props.onSelect, // unused
    selectedIndex = props.selectedIndex, // unused
    selectedTabClassName = props.selectedTabClassName, // unused
    selectedTabPanelClassName = props.selectedTabPanelClassName, // unused
    attributes = __rest(props, ["children", "className", "disabledTabClassName", "domRef", "forceRenderTabPanel", "onSelect", "selectedIndex", "selectedTabClassName", "selectedTabPanelClassName"]);
    var nowNode;
    var _a = __read(react_1.useState({}), 2), tabNodes = _a[0], setTabNodes = _a[1];
    var _b = __read(react_1.useState({}), 2), panelNodes = _b[0], setPanelNodes = _b[1];
    function isNode(node) {
        return node && 'getAttribute' in node;
    }
    // Determine if a node from event.target is a TabItem element
    function isTabItemNode(node) {
        return isNode(node) && node.getAttribute('role') === 'tabitem';
    }
    // Determine if a node from event.target is a TabPanel element
    function isTabPanelNode(node) {
        return isNode(node) && node.getAttribute('role') === 'tabpanel';
    }
    // Determine if a tab node is disabled
    function isTabDisabled(node) {
        return isNode(node) && node.getAttribute('aria-disabled') === 'true';
    }
    /**
     * Determine if a node from event.target is a Tab element for the current Tabs container.
     * If the clicked element is not a Tab, it returns false.
     */
    function isTabFromContainer(node) {
        // return immediately if the clicked element is not a Tab.
        if (!isTabItemNode(node)) {
            return false;
        }
        // Check if the first occurrence of a Tabs container is `tabhead` one.
        var nodeAncestor = node.parentElement || node.parentNode;
        do {
            if (nodeAncestor.getAttribute('role') === 'tabhead')
                return true;
            // if (nodeAncestor === nowNode) return true
            if (nodeAncestor.getAttribute('data-tabs'))
                break;
            nodeAncestor = nodeAncestor.parentElement || node.parentNode;
        } while (nodeAncestor);
        return false;
    }
    function getTabsCount() {
        var children = props.children;
        return methods_1.default.getTabsCount(children);
    }
    function getPanelsCount() {
        var children = props.children;
        return methods_1.default.getPanelsCount(children);
    }
    function setSelected(index, event) {
        // Check index boundary
        if (index < 0 || index >= getTabsCount())
            return;
        var onSelect = props.onSelect, selectedIndex = props.selectedIndex;
        // Call change event handler
        onSelect(index, selectedIndex, event);
    }
    function handleClick(e) {
        var node = e.target;
        do {
            if (isTabFromContainer(node)) {
                var array = [];
                var index = array.slice
                    .call(node.parentNode.children)
                    .filter(isTabItemNode)
                    .indexOf(node);
                setSelected(index, e);
                if (!process.env.isMp) {
                    slider.goTo(index);
                }
                return;
            }
            // eslint-disable-next-line no-cond-assign
        } while ((node = node.parentNode) != null);
    }
    function handleChange(e) {
        var node = e.target;
        var nodeAncestor = node.parentElement || node.parentNode;
        if (!process.env.isMp || !isTabPanelNode(node)) {
            return false;
        }
        if (nodeAncestor.getAttribute('role') === 'tabbody') {
            nodeAncestor.addEventListener('change', function (e) {
                setSelected(e.detail.current, e);
            });
        }
    }
    function getChildren() {
        var index = 0;
        var children = props.children, disabledTabClassName = props.disabledTabClassName, forceRenderTabPanel = props.forceRenderTabPanel, selectedIndex = props.selectedIndex, selectedTabClassName = props.selectedTabClassName, selectedTabPanelClassName = props.selectedTabPanelClassName;
        var tabIds = [];
        var panelIds = [];
        var diff = tabIds.length - getTabsCount();
        // Add ids if new tabs have been added
        // Don't bother removing ids, just keep them in case they are added again
        // This is more efficient, and keeps the uuid counter under control
        while (diff++ < 0) {
            tabIds.push(methods_1.default.uuid());
            panelIds.push(methods_1.default.uuid());
        }
        // Map children to dynamically setup refs
        return methods_1.default.deepMap(children, function (child) {
            var result = child;
            // Clone TabList and Tab components to have refs
            if (methods_1.default.isTabHead(child)) {
                var listIndex_1 = 0;
                result = react_1.cloneElement(child, {
                    children: methods_1.default.deepMap(child.props.children, function (tab) {
                        var key = "tabs-" + listIndex_1;
                        var selected = selectedIndex === listIndex_1;
                        var props = {
                            tabRef: function (node) {
                                tabNodes[key] = node;
                                setTabNodes(tabNodes);
                            },
                            id: tabIds[listIndex_1],
                            panelId: panelIds[listIndex_1],
                            selected: selected,
                        };
                        if (selectedTabClassName)
                            props.selectedClassName = selectedTabClassName;
                        if (disabledTabClassName)
                            props.disabledClassName = disabledTabClassName;
                        listIndex_1++;
                        return react_1.cloneElement(tab, props);
                    }),
                });
            }
            else if (methods_1.default.isTabBody(child)) {
                var listIndex_2 = 0;
                result = react_1.cloneElement(child, {
                    children: methods_1.default.deepMap(child.props.children, function (panel) {
                        var key = "tabs-" + listIndex_2;
                        var selected = selectedIndex === listIndex_2;
                        var props = {
                            tabRef: function (node) {
                                panelNodes[key] = node;
                                setPanelNodes(panelNodes);
                            },
                            id: panelIds[listIndex_2],
                            tabId: tabIds[index],
                            selected: selected,
                        };
                        if (process.env.isMp) {
                        }
                        if (forceRenderTabPanel)
                            props.forceRender = forceRenderTabPanel;
                        if (selectedTabPanelClassName)
                            props.selectedClassName = selectedTabPanelClassName;
                        listIndex_2++;
                        return react_1.cloneElement(panel, props);
                    }),
                    tabIndex: selectedIndex,
                    id: sliderId,
                });
            }
            return result;
        });
    }
    react_1.useEffect(function () {
        if (!process.env.isMp) {
            slider = tiny_slider_1.tns({
                container: "#" + sliderId,
                items: 1,
                slideBy: 'page',
                mouseDrag: true,
                swipeAngle: false,
                controls: false,
                nav: false,
                preventScrollOnTouch: 'auto',
            });
            slider.events.on('indexChanged', function (info) {
                setSelected(info.index - 1, info.event);
            });
        }
    }, []);
    return (react_1.default.createElement("div", __assign({}, attributes, { className: className, onClick: handleClick, onTouchStart: handleChange, role: "tabs", "data-tabs": true }), getChildren()));
}
exports.default = react_1.default.memo(UncontrolledTabs);
//# sourceMappingURL=index.js.map