define(["require", "exports", "Plugins/ExamplePlugin/ExamplePlugin", "DashboardPlugin"], function (require, exports, ExamplePlugin_1, DashboardPlugin_1) {
    "use strict";
    function printName() {
        document.writeln(new ExamplePlugin_1.ExamplePlugin().Name);
        document.writeln('<br/>');
        document.writeln(new DashboardPlugin_1.DashboardPlugin().Name);
    }
    printName();
});
//# sourceMappingURL=main.js.map