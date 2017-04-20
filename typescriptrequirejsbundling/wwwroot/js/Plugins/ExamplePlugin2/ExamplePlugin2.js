var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "BasePlugin"], function (require, exports, BasePlugin_1) {
    "use strict";
    var ExamplePlugin2 = (function (_super) {
        __extends(ExamplePlugin2, _super);
        function ExamplePlugin2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.Name = 'Hello From Example Plugin 2';
            return _this;
        }
        return ExamplePlugin2;
    }(BasePlugin_1.BasePlugin));
    exports.ExamplePlugin2 = ExamplePlugin2;
});
//# sourceMappingURL=ExamplePlugin2.js.map