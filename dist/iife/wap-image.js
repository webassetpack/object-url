var wapImage = (function (exports) {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var WAPPlugin_1 = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    var WAPPlugin = /** @class */ (function () {
        function WAPPlugin(options) {
            this._options = options;
        }
        WAPPlugin.prototype.getName = function () {
            return this.constructor.name;
        };
        WAPPlugin.prototype.getOptions = function () {
            return this._options;
        };
        WAPPlugin.prototype.read = function (data, type) {
            if (type === void 0) { type = 'application/octet-stream'; }
            return this._read(data, type);
        };
        return WAPPlugin;
    }());
    exports.WAPPlugin = WAPPlugin;

    });

    unwrapExports(WAPPlugin_1);
    var WAPPlugin_2 = WAPPlugin_1.WAPPlugin;

    var constants = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    /**
     * The byte position of the Major version integer. (Unsigned 16bit LE)
     */
    exports.BYTE_POS_VERSION_MAJOR = 0x0000;
    /**
     * The byte position of the Minor version integer. (Unsigned 16bit LE)
     */
    exports.BYTE_POS_VERSION_MINOR = 0x0002;
    /**
     * The byte position of the Patch version integer. (Unsigned 16bit LE)
     */
    exports.BYTE_POS_VERSION_PATCH = 0x0004;
    /**
     * The byte position of the manifest byte length. (Unsigned 16bit LE)
     */
    exports.BYTE_POS_MANIFEST_LENGTH = 0x0006;
    /**
     * The byte length of the header, before the manifest data starts.
     */
    exports.BYTE_HEADER_SIZE = 0x0008;

    });

    unwrapExports(constants);
    var constants_1 = constants.BYTE_POS_VERSION_MAJOR;
    var constants_2 = constants.BYTE_POS_VERSION_MINOR;
    var constants_3 = constants.BYTE_POS_VERSION_PATCH;
    var constants_4 = constants.BYTE_POS_MANIFEST_LENGTH;
    var constants_5 = constants.BYTE_HEADER_SIZE;

    var api = createCommonjsModule(function (module, exports) {
    /**
     * This file exposes the classes and objects
     * that are considered to be part of the public
     * api.
     */
    exports.__esModule = true;

    exports.WAPPlugin = WAPPlugin_1.WAPPlugin;

    exports.BYTE_POS_VERSION_MAJOR = constants.BYTE_POS_VERSION_MAJOR;
    exports.BYTE_POS_VERSION_MINOR = constants.BYTE_POS_VERSION_MINOR;
    exports.BYTE_POS_VERSION_PATCH = constants.BYTE_POS_VERSION_PATCH;
    exports.BYTE_POS_MANIFEST_LENGTH = constants.BYTE_POS_MANIFEST_LENGTH;
    exports.BYTE_HEADER_SIZE = constants.BYTE_HEADER_SIZE;

    });

    unwrapExports(api);
    var api_1 = api.WAPPlugin;
    var api_2 = api.BYTE_POS_VERSION_MAJOR;
    var api_3 = api.BYTE_POS_VERSION_MINOR;
    var api_4 = api.BYTE_POS_VERSION_PATCH;
    var api_5 = api.BYTE_POS_MANIFEST_LENGTH;
    var api_6 = api.BYTE_HEADER_SIZE;

    var WAPImage = /** @class */ (function (_super) {
        __extends(WAPImage, _super);
        function WAPImage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WAPImage.prototype._read = function (data, type) {
            return __awaiter(this, void 0, void 0, function () {
                var blob;
                return __generator(this, function (_a) {
                    blob = new Blob([data.buffer], { type: type });
                    return [2 /*return*/, URL.createObjectURL(blob)];
                });
            });
        };
        return WAPImage;
    }(api_1));

    exports.WAPImage = WAPImage;
    exports.default = WAPImage;

    return exports;

}({}));
