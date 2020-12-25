import React, { Fragment } from 'react';
import './index.scss';
function TabBody(props) {
    const { children, tabIndex, } = props;
    let className = 'md-tabs-body';
    if (process.env.isMp) {
        className = `${props.class || ''} ${className}`;
    }
    else {
        className = `${props.className || ''} ${className}`;
    }
    return (React.createElement(Fragment, null, process.env.isMp ?
        React.createElement("wx-swiper", Object.assign({}, props, { className: className, current: tabIndex, role: "tabbody" }), children)
        :
            React.createElement("div", Object.assign({}, props, { className: className, role: "tabbody" }), children)));
}
TabBody.tabsRole = 'TabBody';
export default React.memo(TabBody);
//# sourceMappingURL=index.js.map