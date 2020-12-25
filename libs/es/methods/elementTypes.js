function makeTypeChecker(tabsRole) {
    return (element) => !!element.type && !!element.type.type && element.type.type.tabsRole === tabsRole;
}
export const isTabHead = makeTypeChecker('TabHead');
export const isTabItem = makeTypeChecker('TabItem');
export const isTabBody = makeTypeChecker('TabBody');
export const isTabPanel = makeTypeChecker('TabPanel');
//# sourceMappingURL=elementTypes.js.map