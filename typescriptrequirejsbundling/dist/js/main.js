define('BasePlugin',["require", "exports"], function (require, exports) {
    "use strict";
    var BasePlugin = (function () {
        function BasePlugin() {
        }
        return BasePlugin;
    }());
    exports.BasePlugin = BasePlugin;
});
//# sourceMappingURL=BasePlugin.js.map;
;
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define('DashboardPlugin',["require", "exports", "BasePlugin"], function (require, exports, BasePlugin_1) {
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
//# sourceMappingURL=DashboardPlugin.js.map;
define('main',["require", "exports", "Plugins/ExamplePlugin/ExamplePlugin", "DashboardPlugin"], function (require, exports, ExamplePlugin_1, DashboardPlugin_1) {
    "use strict";
    function printName() {
        document.writeln(new ExamplePlugin_1.ExamplePlugin().Name);
        document.writeln('<br/>');
        document.writeln(new DashboardPlugin_1.DashboardPlugin().Name);
    }
    printName();
});
//# sourceMappingURL=main.js.map;
