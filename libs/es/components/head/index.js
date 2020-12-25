import React from 'react';
import './index.scss';
function TabHead(props) {
    const { children } = props;
    let className = 'md-tabs-head';
    if (process.env.isMp) {
        className = `${props.class || ''} ${className}`;
    }
    else {
        className = `${props.className || ''} ${className}`;
    }
    return (React.createElement("div", Object.assign({}, props, { className: className, role: "tabhead" }), children));
}
TabHead.tabsRole = 'TabHead';
export default React.memo(TabHead);
//# sourceMappingURL=index.js.map