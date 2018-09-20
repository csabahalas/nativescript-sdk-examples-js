"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var arrayItems = [
    { name: "United States" },
    { name: "Bulgaria" },
    { name: "Germany" },
    { name: "Denmark" },
    { name: "India" },
    { name: "Spain" },
    { name: "Italy" }
];
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    var myItems = new observable_array_1.ObservableArray(arrayItems);
    vm.set("myItems", myItems);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onSubmit(args) {
    var searchBar = args.object;
    var searchValue = searchBar.text.toLowerCase();
    var myItems = new observable_array_1.ObservableArray();
    if (searchValue !== "") {
        for (var i = 0; i < arrayItems.length; i++) {
            if (arrayItems[i].name.toLowerCase().indexOf(searchValue) !== -1) {
                myItems.push(arrayItems[i]);
            }
        }
    }
    var page = searchBar.page;
    var vm = page.bindingContext;
    vm.set("myItems", myItems);
}
exports.onSubmit = onSubmit;
function onClear(args) {
    var searchBar = args.object;
    searchBar.text = "";
    searchBar.hint = "Search for a country and press enter";
    var myItems = new observable_array_1.ObservableArray();
    arrayItems.forEach(function (item) {
        myItems.push(item);
    });
    var page = searchBar.page;
    var vm = page.bindingContext;
    vm.set("myItems", myItems);
}
exports.onClear = onClear;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLXRzLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJldmVudHMtdHMtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUE0RDtBQUM1RCwyRUFBdUU7QUFLdkUsSUFBTSxVQUFVLEdBQUc7SUFDZixFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0lBQ3BCLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUNuQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7SUFDbkIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2pCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtJQUNqQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7Q0FDcEIsQ0FBQztBQUNGLHdCQUErQixJQUFJO0lBQy9CLElBQU0sSUFBSSxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDO0lBRXRDLElBQU0sRUFBRSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBQzVCLElBQU0sT0FBTyxHQUFHLElBQUksa0NBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUVoRCxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUUzQixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUM3QixDQUFDO0FBVEQsd0NBU0M7QUFFRCxrQkFBeUIsSUFBSTtJQUN6QixJQUFNLFNBQVMsR0FBMEIsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyRCxJQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRWpELElBQU0sT0FBTyxHQUFHLElBQUksa0NBQWUsRUFBRSxDQUFDO0lBQ3RDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3pDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0QsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFDRCxJQUFNLElBQUksR0FBZ0IsU0FBUyxDQUFDLElBQUksQ0FBQztJQUN6QyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFmRCw0QkFlQztBQUVELGlCQUF3QixJQUFJO0lBQ3hCLElBQU0sU0FBUyxHQUEwQixJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JELFNBQVMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLFNBQVMsQ0FBQyxJQUFJLEdBQUcsc0NBQXNDLENBQUM7SUFFeEQsSUFBTSxPQUFPLEdBQUcsSUFBSSxrQ0FBZSxFQUFFLENBQUM7SUFDdEMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7UUFFcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV2QixDQUFDLENBQUMsQ0FBQztJQUVILElBQU0sSUFBSSxHQUFnQixTQUFTLENBQUMsSUFBSSxDQUFDO0lBQ3pDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQWZELDBCQWVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZUFycmF5fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHtTZWFyY2hCYXJ9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlYXJjaC1iYXJcIlxuLy8gPj4gY2xlYXItc2VhcmNoLWJhci1zdWJtaXQtdHNcblxuY29uc3QgYXJyYXlJdGVtcyA9IFtcbiAgICB7IG5hbWU6IFwiVW5pdGVkIFN0YXRlc1wiIH0sXG4gICAgeyBuYW1lOiBcIkJ1bGdhcmlhXCIgfSxcbiAgICB7IG5hbWU6IFwiR2VybWFueVwiIH0sXG4gICAgeyBuYW1lOiBcIkRlbm1hcmtcIiB9LFxuICAgIHsgbmFtZTogXCJJbmRpYVwiIH0sXG4gICAgeyBuYW1lOiBcIlNwYWluXCIgfSxcbiAgICB7IG5hbWU6IFwiSXRhbHlcIiB9XG5dO1xuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpIHtcbiAgICBjb25zdCBwYWdlOiBQYWdlID0gPFBhZ2U+IGFyZ3Mub2JqZWN0O1xuICAgIC8vIHNldCB1cCB0aGUgTGlzdFZpZXcgaXRlbXNcbiAgICBjb25zdCB2bSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgY29uc3QgbXlJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoYXJyYXlJdGVtcyk7XG5cbiAgICB2bS5zZXQoXCJteUl0ZW1zXCIsIG15SXRlbXMpO1xuXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xufVxuLy8gc2VhcmNoIGZvciBjb3VudHJ5XG5leHBvcnQgZnVuY3Rpb24gb25TdWJtaXQoYXJncykge1xuICAgIGNvbnN0IHNlYXJjaEJhcjogU2VhcmNoQmFyID0gPFNlYXJjaEJhcj4gYXJncy5vYmplY3Q7XG4gICAgY29uc3Qgc2VhcmNoVmFsdWUgPSBzZWFyY2hCYXIudGV4dC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgY29uc3QgbXlJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcbiAgICBpZiAoc2VhcmNoVmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXJyYXlJdGVtc1tpXS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hWYWx1ZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgbXlJdGVtcy5wdXNoKGFycmF5SXRlbXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSA8UGFnZT4gc2VhcmNoQmFyLnBhZ2U7XG4gICAgY29uc3Qgdm0gPSBwYWdlLmJpbmRpbmdDb250ZXh0O1xuICAgIHZtLnNldChcIm15SXRlbXNcIiwgbXlJdGVtcyk7XG59XG4vLyBjbGVhciBTZWFyY2hCYXIgdGV4dCBhbmQgbG9hZCBMaXN0VmlldyBpbml0aWFsIGRhdGFcbmV4cG9ydCBmdW5jdGlvbiBvbkNsZWFyKGFyZ3MpIHtcbiAgICBjb25zdCBzZWFyY2hCYXI6IFNlYXJjaEJhciA9IDxTZWFyY2hCYXI+IGFyZ3Mub2JqZWN0O1xuICAgIHNlYXJjaEJhci50ZXh0ID0gXCJcIjtcbiAgICBzZWFyY2hCYXIuaGludCA9IFwiU2VhcmNoIGZvciBhIGNvdW50cnkgYW5kIHByZXNzIGVudGVyXCI7XG5cbiAgICBjb25zdCBteUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheSgpO1xuICAgIGFycmF5SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXG4gICAgICAgIG15SXRlbXMucHVzaChpdGVtKTtcblxuICAgIH0pO1xuXG4gICAgY29uc3QgcGFnZTogUGFnZSA9IDxQYWdlPiBzZWFyY2hCYXIucGFnZTtcbiAgICBjb25zdCB2bSA9IHBhZ2UuYmluZGluZ0NvbnRleHQ7XG4gICAgdm0uc2V0KFwibXlJdGVtc1wiLCBteUl0ZW1zKTtcbn1cbi8vIDw8IGNsZWFyLXNlYXJjaC1iYXItc3VibWl0LXRzXG4iXX0=