"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var core_1 = require("@wap/core");
var WAPImage = /** @class */ (function (_super) {
    tslib_1.__extends(WAPImage, _super);
    function WAPImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WAPImage.prototype._read = function (data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var blob;
            return tslib_1.__generator(this, function (_a) {
                blob = new Blob([data.buffer]);
                return [2 /*return*/, URL.createObjectURL(blob)];
            });
        });
    };
    return WAPImage;
}(core_1.WAPPlugin));
exports.WAPImage = WAPImage;
exports["default"] = WAPImage;
//# sourceMappingURL=WAPImage.js.map