import React from 'react';
declare type TabItemProps = {
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
    tabRef?: Function;
};
declare function TabItem(props: TabItemProps): JSX.Element;
declare namespace TabItem {
    var tabsRole: string;
}
declare const _default: React.MemoExoticComponent<typeof TabItem>;
export default _default;
