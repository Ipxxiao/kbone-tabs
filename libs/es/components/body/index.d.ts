import React from 'react';
declare type TabBodyProps = {
    children: any;
    /** css class， 传入 className 会被转换成 class */
    class?: string;
    className?: string;
    tabIndex?: number;
};
declare function TabBody(props: TabBodyProps): JSX.Element;
declare namespace TabBody {
    var tabsRole: string;
}
declare const _default: React.MemoExoticComponent<typeof TabBody>;
export default _default;
