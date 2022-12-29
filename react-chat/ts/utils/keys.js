(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.folderId = exports.IAM_token = void 0;
    exports.IAM_token = "t1.9euelZrNkp7Mz5qcmZmZicyJzo-Uzu3rnpWajJWMmY3JnJvKm82PnJGaiZbl8_dcNUli-e8nKBtE_N3z9xxkRmL57ycoG0T8.qkRCB8S7jksrgaCg296jSnfFdByPn4KuVvHvA32Zh45EXeCWsUV2ZOTW2iUG5C2dbI4Aq3F4yzUaKr3w5mPtDg";
    exports.folderId = "b1gqom4jvugbo2o9rhtr";
});
