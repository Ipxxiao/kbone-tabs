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
import React from 'react';
import classnames from 'classnames';
function TabItem(props) {
    const { children, disabled, disabledClassName, panelId, selected, tabIndex, tabRef, selectedClassName = 'on' } = props, attributes = __rest(props, ["children", "disabled", "disabledClassName", "panelId", "selected", "tabIndex", "tabRef", "selectedClassName"]);
    let nowNode;
    let className = 'md-tabs-item';
    if (process.env.isMp) {
        attributes.className = `${props.class || ''} ${className}`;
    }
    else {
        attributes.className = `${props.className || ''} ${className}`;
    }
    return (React.createElement("div", Object.assign({}, attributes, { className: classnames(attributes.className, {
            [selectedClassName]: selected
        }), role: "tabitem", "aria-selected": selected ? 'true' : 'false', "aria-disabled": disabled ? 'true' : 'false', "aria-controls": panelId, tabIndex: tabIndex || (selected ? 0 : undefined) }), children));
}
TabItem.tabsRole = 'TabItem';
export default React.memo(TabItem);
//# sourceMappingURL=index.js.map