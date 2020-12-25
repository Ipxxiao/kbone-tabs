import { deepForEach } from './childrenDeepMap';
import { isTabItem, isTabPanel } from './elementTypes';

export function getTabsCount(children: ChildNode) {
    let tabCount = 0;
    deepForEach(children, (child: ChildNode) => {
        if (isTabItem(child)) tabCount++;
    });

    return tabCount;
}

export function getPanelsCount(children: ChildNode) {
    let panelCount = 0;
    deepForEach(children, (child: ChildNode) => {
        if (isTabPanel(child)) panelCount++;
    });

    return panelCount;
}