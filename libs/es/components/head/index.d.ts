import React from 'react';
import './index.scss';
declare type TabHeadProps = {
    children: any;
    /** css class， 传入 className 会被转换成 class */
    class?: string;
    className?: string;
};
declare function TabHead(props: TabHeadProps): JSX.Element;
declare namespace TabHead {
    var tabsRole: string;
}
declare const _default: React.MemoExoticComponent<typeof TabHead>;
export default _default;
