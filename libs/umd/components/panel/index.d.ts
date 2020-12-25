import React from 'react';
declare type TabPanelProps = {
    children: any;
    /** 埋点 */
    asm?: string;
    /** css class， 传入 className 会被转换成 class */
    class?: string;
    className?: string;
    disabled?: boolean;
    disabledClassName?: string;
    selectedClassName?: string;
    selected?: boolean;
    panelId?: string;
    tabIndex?: number;
    forceRender?: boolean;
    tabId?: string;
    tabRef?: Function;
};
declare function TabPanel(props: TabPanelProps): JSX.Element;
declare namespace TabPanel {
    var tabsRole: string;
}
declare const _default: React.MemoExoticComponent<typeof TabPanel>;
export default _default;
