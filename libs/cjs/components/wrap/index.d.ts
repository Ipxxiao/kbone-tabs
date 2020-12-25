import React from 'react';
declare type TabsProps = {
    children: any;
    /** css class， 传入 className 会被转换成 class */
    class?: string;
    className?: string;
    selectedIndex?: number;
    defaultIndex?: number;
    onSelect?: Function;
};
declare function Tabs(props: TabsProps): JSX.Element;
declare namespace Tabs {
    var tabsRole: string;
}
declare const _default: React.MemoExoticComponent<typeof Tabs>;
export default _default;
