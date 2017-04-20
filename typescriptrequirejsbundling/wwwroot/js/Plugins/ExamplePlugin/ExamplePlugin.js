var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "BasePlugin"], function (require, exports, BasePlugin_1) {
    "use strict";
    var ExamplePlugin = (function (_super) {
        __extends(ExamplePlugin, _super);
        function ExamplePlugin() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.Name = 'Hello From Example Plugin';
            return _this;
        }
        return ExamplePlugin;
    }(BasePlugin_1.BasePlugin));
    exports.ExamplePlugin = ExamplePlugin;
});
//# sourceMappingURL=ExamplePlugin.js.map