import { deepForEach } from './childrenDeepMap';
import { isTabItem, isTabPanel } from './elementTypes';
export function getTabsCount(children) {
    let tabCount = 0;
    deepForEach(children, (child) => {
        if (isTabItem(child))
            tabCount++;
    });
    return tabCount;
}
export function getPanelsCount(children) {
    let panelCount = 0;
    deepForEach(children, (child) => {
        if (isTabPanel(child))
            panelCount++;
    });
    return panelCount;
}
//# sourceMappingURL=count.js.map