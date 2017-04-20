import { ExamplePlugin } from 'Plugins/ExamplePlugin/ExamplePlugin'
import { DashboardPlugin } from 'DashboardPlugin'


function printName() {
    document.writeln(new ExamplePlugin().Name);
    document.writeln('<br/>');
    document.writeln(new DashboardPlugin().Name);
}
 
printName();