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
import React, { Fragment } from 'react';
import classnames from 'classnames';
function TabPanel(props) {
    const { children, disabled, disabledClassName, panelId, selected, tabIndex, tabRef, selectedClassName = 'on', forceRender, tabId } = props, attributes = __rest(props, ["children", "disabled", "disabledClassName", "panelId", "selected", "tabIndex", "tabRef", "selectedClassName", "forceRender", "tabId"]);
    let className = 'md-tabs-panel';
    if (process.env.isMp) {
        attributes.className = `${props.class || ''} ${className}`;
    }
    else {
        attributes.className = `${props.className || ''} ${className}`;
    }
    return (React.createElement(Fragment, null, process.env.isMp ?
        React.createElement("wx-swiper-item", Object.assign({}, attributes, { className: classnames(attributes.className, {
                [selectedClassName]: selected
            }), role: "tabpanel", "aria-labelledby": tabId }), forceRender || selected ? children : null)
        :
            React.createElement("div", null,
                React.createElement("div", Object.assign({}, attributes, { className: classnames(attributes.className, {
                        [selectedClassName]: selected
                    }), ref: (node) => {
                        // nowNode = node
                        if (tabRef)
                            tabRef(node);
                    }, role: "tabpanel", "aria-labelledby": tabId }), forceRender || selected ? children : null))));
}
TabPanel.tabsRole = 'TabPanel';
export default React.memo(TabPanel);
//# sourceMappingURL=index.js.map