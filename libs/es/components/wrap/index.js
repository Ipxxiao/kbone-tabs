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
import React, { useState } from 'react';
import UncontrolledTabs from '../uncontrolled';
let canUseActiveElement;
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
    const { children, defaultIndex } = props, attributes = __rest(props, ["children", "defaultIndex"]);
    let className = 'md-tabs';
    const [selectedIndex, setSelectedIndex] = useState(0);
    if (selectedIndex != null) {
        attributes.selectedIndex = selectedIndex;
    }
    if (process.env.isMp) {
        attributes.className = `${props.class || ''} ${className}`;
    }
    else {
        attributes.className = `${props.className || ''} ${className}`;
    }
    function handleSelected(index, last, event) {
        const { onSelect } = props;
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
    return (React.createElement(UncontrolledTabs, Object.assign({}, attributes, { onSelect: handleSelected }), children));
}
Tabs.tabsRole = 'Tabs';
export default React.memo(Tabs);
//# sourceMappingURL=index.js.map