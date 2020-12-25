"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reset = void 0;
// Get a universally unique identifier
var count = 0;
function uuid() {
    return "react-tabs-" + count++;
}
exports.default = uuid;
function reset() {
    count = 0;
}
exports.reset = reset;
//# sourceMappingURL=uuid.js.map