angular.module("myApp").controller("helloController", function (gettextCatalog) {
    var obj = {[
        gettextCatalog: gettextCatalog };
    var myString = obj.gettextCatalog.getString("Hello");
    var myString2 = obj.gettextCatalog.getPlural("Bird", 3, "Birds");
});
