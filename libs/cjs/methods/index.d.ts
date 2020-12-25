import { deepMap, deepForEach } from './childrenDeepMap';
import { getTabsCount, getPanelsCount } from './count';
import uuid, { reset } from './uuid';
declare const _default: {
    deepMap: typeof deepMap;
    deepForEach: typeof deepForEach;
    getTabsCount: typeof getTabsCount;
    getPanelsCount: typeof getPanelsCount;
    isTabItem: (element: any) => boolean;
    isTabHead: (element: any) => boolean;
    isTabPanel: (element: any) => boolean;
    isTabBody: (element: any) => boolean;
    uuid: typeof uuid;
    uuidReset: typeof reset;
};
export default _default;
