"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var dateConverter = {
        toView: function (value, format) {
            var result = format;
            var day = value.getDate();
            result = result.replace("DD", day < 10 ? "0" + day : day);
            var month = value.getMonth() + 1;
            result = result.replace("MM", month < 10 ? "0" + month : month);
            result = result.replace("YYYY", value.getFullYear());
            return result;
        },
        toModel: function (value, format) {
            var ddIndex = format.indexOf("DD");
            var day = parseInt(value.substr(ddIndex, 2), 10);
            var mmIndex = format.indexOf("MM");
            var month = parseInt(value.substr(mmIndex, 2), 10);
            var yyyyIndex = format.indexOf("YYYY");
            var year = parseInt(value.substr(yyyyIndex, 4), 10);
            var result = new Date(year, month - 1, day);
            return result;
        }
    };
    var vm = observable_1.fromObject({
        dateConverter: dateConverter,
        dateFormat: "DD/MM/YYYY",
        testDate: new Date()
    });
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function firstTfLoaded(args) {
    var firstTextfield = args.object;
    setTimeout(function () {
        firstTextfield.focus();
    }, 100);
}
exports.firstTfLoaded = firstTfLoaded;
function onReturnPress(args) {
    var textField = args.object;
    console.log(textField.hint);
    console.log(textField.text);
    console.log(textField.secure);
    console.log(textField.keyboardType);
    console.log(textField.returnKeyType);
    console.log(textField.autocapitalizationType);
    console.log(textField.updateTextTrigger);
    console.log(textField.editable);
    console.log(textField.autocorrect);
    console.log(textField.maxLength);
    setTimeout(function () {
        textField.dismissSoftInput();
    }, 100);
}
exports.onReturnPress = onReturnPress;
function onFocus(args) {
    console.log("onFocus event");
}
exports.onFocus = onFocus;
function onBlur(args) {
    var textField = args.object;
    textField.dismissSoftInput();
    console.log("onBlur event");
}
exports.onBlur = onBlur;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNzLXRzLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNpY3MtdHMtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUE0RDtBQUk1RCx3QkFBK0IsSUFBSTtJQUMvQixJQUFNLElBQUksR0FBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN0QyxJQUFNLGFBQWEsR0FBRztRQUNsQixNQUFNLFlBQUMsS0FBSyxFQUFFLE1BQU07WUFDaEIsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3BCLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM1QixNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBSSxHQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFELElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbkMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQUksS0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRSxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFFckQsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDO1FBQ0QsT0FBTyxZQUFDLEtBQUssRUFBRSxNQUFNO1lBQ2pCLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25ELElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3JELElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekMsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3RELElBQU0sTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRTlDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQztLQUNKLENBQUM7SUFFRixJQUFNLEVBQUUsR0FBRyx1QkFBVSxDQUFDO1FBQ2xCLGFBQWEsZUFBQTtRQUNiLFVBQVUsRUFBRSxZQUFZO1FBQ3hCLFFBQVEsRUFBRSxJQUFJLElBQUksRUFBRTtLQUN2QixDQUFDLENBQUM7SUFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUM3QixDQUFDO0FBaENELHdDQWdDQztBQUVELHVCQUE4QixJQUFJO0lBQzlCLElBQU0sY0FBYyxHQUEwQixJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzFELFVBQVUsQ0FBQztRQUNQLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDWixDQUFDO0FBTEQsc0NBS0M7QUFFRCx1QkFBOEIsSUFBSTtJQUU5QixJQUFNLFNBQVMsR0FBMEIsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUVyRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUc5QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUVwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUVyQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBRzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFFekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFakMsVUFBVSxDQUFDO1FBQ1AsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDakMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ1osQ0FBQztBQTdCRCxzQ0E2QkM7QUFFRCxpQkFBd0IsSUFBSTtJQUV4QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFIRCwwQkFHQztBQUVELGdCQUF1QixJQUFJO0lBRXZCLElBQU0sU0FBUyxHQUF5QixJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BELFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQUxELHdCQUtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmcm9tT2JqZWN0fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHtUZXh0RmllbGR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGRcIjtcbi8vIHNldHRpbmcgdXAgdGhlIGZvcm1hdCBmb3IgdGhlIFRleHRGaWVsZCB0ZXh0XG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJncykge1xuICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSA8UGFnZT4gYXJncy5vYmplY3Q7XG4gICAgY29uc3QgZGF0ZUNvbnZlcnRlciA9IHtcbiAgICAgICAgdG9WaWV3KHZhbHVlLCBmb3JtYXQpIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBmb3JtYXQ7XG4gICAgICAgICAgICBjb25zdCBkYXkgPSB2YWx1ZS5nZXREYXRlKCk7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShcIkREXCIsIGRheSA8IDEwID8gYDAke2RheX1gIDogZGF5KTtcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gdmFsdWUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShcIk1NXCIsIG1vbnRoIDwgMTAgPyBgMCR7bW9udGh9YCA6IG1vbnRoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKFwiWVlZWVwiLCB2YWx1ZS5nZXRGdWxsWWVhcigpKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcbiAgICAgICAgdG9Nb2RlbCh2YWx1ZSwgZm9ybWF0KSB7XG4gICAgICAgICAgICBjb25zdCBkZEluZGV4ID0gZm9ybWF0LmluZGV4T2YoXCJERFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGRheSA9IHBhcnNlSW50KHZhbHVlLnN1YnN0cihkZEluZGV4LCAyKSwgMTApO1xuICAgICAgICAgICAgY29uc3QgbW1JbmRleCA9IGZvcm1hdC5pbmRleE9mKFwiTU1cIik7XG4gICAgICAgICAgICBjb25zdCBtb250aCA9IHBhcnNlSW50KHZhbHVlLnN1YnN0cihtbUluZGV4LCAyKSwgMTApO1xuICAgICAgICAgICAgY29uc3QgeXl5eUluZGV4ID0gZm9ybWF0LmluZGV4T2YoXCJZWVlZXCIpO1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IHBhcnNlSW50KHZhbHVlLnN1YnN0cih5eXl5SW5kZXgsIDQpLCAxMCk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgdm0gPSBmcm9tT2JqZWN0KHtcbiAgICAgICAgZGF0ZUNvbnZlcnRlcixcbiAgICAgICAgZGF0ZUZvcm1hdDogXCJERC9NTS9ZWVlZXCIsXG4gICAgICAgIHRlc3REYXRlOiBuZXcgRGF0ZSgpXG4gICAgfSk7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xufVxuLy8gPj4gdGV4dGZpZWxkLWhhbmRsZS1zdWJtaXQtZXZlbnQtdHNcbmV4cG9ydCBmdW5jdGlvbiBmaXJzdFRmTG9hZGVkKGFyZ3MpIHtcbiAgICBjb25zdCBmaXJzdFRleHRmaWVsZDogVGV4dEZpZWxkID0gPFRleHRGaWVsZD4gYXJncy5vYmplY3Q7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZpcnN0VGV4dGZpZWxkLmZvY3VzKCk7IC8vIFNob3dzIHRoZSBzb2Z0IGlucHV0IG1ldGhvZCwgdXN1c2FsbHkgYSBzb2Z0IGtleWJvYXJkLlxuICAgIH0sIDEwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblJldHVyblByZXNzKGFyZ3MpIHtcbiAgICAvLyByZXR1cm5QcmVzcyBldmVudCB3aWxsIGJlIHRyaWdnZXJlZCB3aGVuIHVzZXIgc3VibWl0cyBhIHZhbHVlXG4gICAgY29uc3QgdGV4dEZpZWxkOiBUZXh0RmllbGQgPSA8VGV4dEZpZWxkPiBhcmdzLm9iamVjdDtcbiAgICAvLyBHZXRzIG9yIHNldHMgdGhlIHBsYWNlaG9sZGVyIHRleHQuXG4gICAgY29uc29sZS5sb2codGV4dEZpZWxkLmhpbnQpO1xuICAgIC8vIEdldHMgb3Igc2V0cyB0aGUgaW5wdXQgdGV4dC5cbiAgICBjb25zb2xlLmxvZyh0ZXh0RmllbGQudGV4dCk7XG4gICAgLy8gR2V0cyBvciBzZXRzIHRoZSBzZWN1cmUgb3B0aW9uIChlLmcuIGZvciBwYXNzd29yZHMpLlxuICAgIGNvbnNvbGUubG9nKHRleHRGaWVsZC5zZWN1cmUpO1xuXG4gICAgLy8gR2V0cyBvciBzZXRzIHRoZSBzb2Z0IGtleWJvYXJkIHR5cGUuIE9wdGlvbnM6IFwiZGF0ZXRpbWVcIiB8IFwicGhvbmVcIiB8IFwibnVtYmVyXCIgfCBcInVybFwiIHwgXCJlbWFpbFwiXG4gICAgY29uc29sZS5sb2codGV4dEZpZWxkLmtleWJvYXJkVHlwZSk7XG4gICAgLy8gR2V0cyBvciBzZXRzIHRoZSBzb2Z0IGtleWJvYXJkIHJldHVybiBrZXkgZmxhdm9yLiBPcHRpb25zOiBcImRvbmVcIiB8IFwibmV4dFwiIHwgXCJnb1wiIHwgXCJzZWFyY2hcIiB8IFwic2VuZFwiXG4gICAgY29uc29sZS5sb2codGV4dEZpZWxkLnJldHVybktleVR5cGUpO1xuICAgIC8vIEdldHMgb3Igc2V0cyB0aGUgYXV0b2NhcGl0YWxpemF0aW9uIHR5cGUuIE9wdGlvbnM6IFwibm9uZVwiIHwgXCJ3b3Jkc1wiIHwgXCJzZW50ZW5jZXNcIiB8IFwiYWxsY2hhcmFjdGVyc1wiXG4gICAgY29uc29sZS5sb2codGV4dEZpZWxkLmF1dG9jYXBpdGFsaXphdGlvblR5cGUpO1xuXG4gICAgLy8gR2V0cyBvciBzZXRzIGEgdmFsdWUgaW5kaWNhdGluZyB3aGVuIHRoZSB0ZXh0IHByb3BlcnR5IHdpbGwgYmUgdXBkYXRlZC5cbiAgICBjb25zb2xlLmxvZyh0ZXh0RmllbGQudXBkYXRlVGV4dFRyaWdnZXIpO1xuICAgIC8vIEdldHMgb3Igc2V0cyB3aGV0aGVyIHRoZSBpbnN0YW5jZSBpcyBlZGl0YWJsZS5cbiAgICBjb25zb2xlLmxvZyh0ZXh0RmllbGQuZWRpdGFibGUpO1xuICAgIC8vIEVuYWJsZXMgb3IgZGlzYWJsZXMgYXV0b2NvcnJlY3Rpb24uXG4gICAgY29uc29sZS5sb2codGV4dEZpZWxkLmF1dG9jb3JyZWN0KTtcbiAgICAvLyBMaW1pdHMgaW5wdXQgdG8gYSBjZXJ0YWluIG51bWJlciBvZiBjaGFyYWN0ZXJzLlxuICAgIGNvbnNvbGUubG9nKHRleHRGaWVsZC5tYXhMZW5ndGgpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRleHRGaWVsZC5kaXNtaXNzU29mdElucHV0KCk7IC8vIEhpZGVzIHRoZSBzb2Z0IGlucHV0IG1ldGhvZCwgdXN1c2FsbHkgYSBzb2Z0IGtleWJvYXJkLlxuICAgIH0sIDEwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkZvY3VzKGFyZ3MpIHtcbiAgICAvLyBmb2N1cyBldmVudCB3aWxsIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VycyBlbnRlcnMgdGhlIFRleHRGaWVsZFxuICAgIGNvbnNvbGUubG9nKFwib25Gb2N1cyBldmVudFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQmx1cihhcmdzKSB7XG4gICAgLy8gYmx1ciBldmVudCB3aWxsIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIGxlYXZlcyB0aGUgVGV4dEZpZWxkXG4gICAgY29uc3QgdGV4dEZpZWxkOlRleHRGaWVsZCA9IDxUZXh0RmllbGQ+IGFyZ3Mub2JqZWN0O1xuICAgIHRleHRGaWVsZC5kaXNtaXNzU29mdElucHV0KCk7XG4gICAgY29uc29sZS5sb2coXCJvbkJsdXIgZXZlbnRcIik7XG59XG4vLyA8PCB0ZXh0ZmllbGQtaGFuZGxlLXN1Ym1pdC1ldmVudC10c1xuIl19