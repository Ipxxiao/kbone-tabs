import React from 'react';
import 'tiny-slider/src/tiny-slider.scss';
declare type UncontrolledTabsProps = {
    children: any;
    /** css class， 传入 className 会被转换成 class */
    className?: string;
    disabledTabClassName?: string;
    forceRenderTabPanel?: boolean;
    selectedIndex?: number;
    selectedTabClassName?: string;
    selectedTabPanelClassName?: string;
    onSelect: Function;
    domRef?: Function;
};
declare function UncontrolledTabs(props: UncontrolledTabsProps): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof UncontrolledTabs>;
export default _default;
