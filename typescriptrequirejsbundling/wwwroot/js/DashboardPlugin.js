var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "BasePlugin"], function (require, exports, BasePlugin_1) {
    "use strict";
    var DashboardPlugin = (function (_super) {
        __extends(DashboardPlugin, _super);
        function DashboardPlugin() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.Name = 'Hello From Dashboard Plugin';
            return _this;
        }
        return DashboardPlugin;
    }(BasePlugin_1.BasePlugin));
    exports.DashboardPlugin = DashboardPlugin;
});
//# sourceMappingURL=DashboardPlugin.js.map