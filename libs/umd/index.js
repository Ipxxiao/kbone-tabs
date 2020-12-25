var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./components/wrap", "./components/head", "./components/body", "./components/item", "./components/panel"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TabPanel = exports.TabItem = exports.TabBody = exports.TabHead = exports.Tabs = void 0;
    var wrap_1 = __importDefault(require("./components/wrap"));
    exports.Tabs = wrap_1.default;
    var head_1 = __importDefault(require("./components/head"));
    exports.TabHead = head_1.default;
    var body_1 = __importDefault(require("./components/body"));
    exports.TabBody = body_1.default;
    var item_1 = __importDefault(require("./components/item"));
    exports.TabItem = item_1.default;
    var panel_1 = __importDefault(require("./components/panel"));
    exports.TabPanel = panel_1.default;
});
//# sourceMappingURL=index.js.map