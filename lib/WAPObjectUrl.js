"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var core_1 = require("@wap/core");
var WAPObjectUrl = /** @class */ (function (_super) {
    tslib_1.__extends(WAPObjectUrl, _super);
    function WAPObjectUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WAPObjectUrl.prototype._read = function (data, type) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var blob;
            return tslib_1.__generator(this, function (_a) {
                blob = new Blob([data.buffer], { type: type });
                return [2 /*return*/, URL.createObjectURL(blob)];
            });
        });
    };
    return WAPObjectUrl;
}(core_1.WAPPlugin));
exports.WAPObjectUrl = WAPObjectUrl;
exports["default"] = WAPObjectUrl;
//# sourceMappingURL=WAPObjectUrl.js.map