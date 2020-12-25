"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var childrenDeepMap_1 = require("./childrenDeepMap");
var count_1 = require("./count");
var elementTypes_1 = require("./elementTypes");
var uuid_1 = __importStar(require("./uuid"));
exports.default = { deepMap: childrenDeepMap_1.deepMap, deepForEach: childrenDeepMap_1.deepForEach, getTabsCount: count_1.getTabsCount, getPanelsCount: count_1.getPanelsCount, isTabItem: elementTypes_1.isTabItem, isTabHead: elementTypes_1.isTabHead, isTabPanel: elementTypes_1.isTabPanel, isTabBody: elementTypes_1.isTabBody, uuid: uuid_1.default, uuidReset: uuid_1.reset };
//# sourceMappingURL=index.js.map