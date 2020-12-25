"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTabPanel = exports.isTabBody = exports.isTabItem = exports.isTabHead = void 0;
function makeTypeChecker(tabsRole) {
    return function (element) { return !!element.type && !!element.type.type && element.type.type.tabsRole === tabsRole; };
}
exports.isTabHead = makeTypeChecker('TabHead');
exports.isTabItem = makeTypeChecker('TabItem');
exports.isTabBody = makeTypeChecker('TabBody');
exports.isTabPanel = makeTypeChecker('TabPanel');
//# sourceMappingURL=elementTypes.js.map