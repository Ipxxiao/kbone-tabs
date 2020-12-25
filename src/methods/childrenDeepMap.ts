import { Children, cloneElement } from 'react';
import { isTabPanel, isTabItem, isTabHead, isTabBody } from './elementTypes';

function isTabChild(child: ChildNode) {
    return isTabItem(child) || isTabHead(child) || isTabPanel(child) || isTabBody(child);
}

export function deepMap(children: any, callback: Function): any {
    return Children.map(children, (child) => {
        // null happens when conditionally rendering TabPanel/Tab
        // see https://github.com/reactjs/react-tabs/issues/37
        if (child === null) return null;

        if (isTabChild(child)) {
            return callback(child);
        }

        if (
            child.props &&
            child.props.children &&
            typeof child.props.children === 'object'
        ) {
            // Clone the child that has children and map them too
            return cloneElement(child, {
                ...child.props,
                children: deepMap(child.props.children, callback),
            });
        }

        return child;
    });
}

export function deepForEach(children: any, callback: Function) {
    return Children.forEach(children, (child) => {
        // null happens when conditionally rendering TabPanel/Tab
        // see https://github.com/reactjs/react-tabs/issues/37
        if (child === null) return;

        if (isTabItem(child) || isTabPanel(child)) {
            callback(child);
        } else if (
            child.props &&
            child.props.children &&
            typeof child.props.children === 'object'
        ) {
            if (isTabHead(child) || isTabBody(child)) callback(child);
            deepForEach(child.props.children, callback);
        }
    });
}