(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./childrenDeepMap", "./elementTypes"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getPanelsCount = exports.getTabsCount = void 0;
    var childrenDeepMap_1 = require("./childrenDeepMap");
    var elementTypes_1 = require("./elementTypes");
    function getTabsCount(children) {
        var tabCount = 0;
        childrenDeepMap_1.deepForEach(children, function (child) {
            if (elementTypes_1.isTabItem(child))
                tabCount++;
        });
        return tabCount;
    }
    exports.getTabsCount = getTabsCount;
    function getPanelsCount(children) {
        var panelCount = 0;
        childrenDeepMap_1.deepForEach(children, function (child) {
            if (elementTypes_1.isTabPanel(child))
                panelCount++;
        });
        return panelCount;
    }
    exports.getPanelsCount = getPanelsCount;
});
//# sourceMappingURL=count.js.map