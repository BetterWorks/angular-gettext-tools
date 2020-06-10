angular.module("myApp").controller("helloController", function (gettextCatalog) {
    var myString = gettextCatalog.getString("Hello");
    var myString2 = gettextCatalog.getString("Hello2", null, null, "Context");
    var myString3 = gettextCatalog.getPlural("Bird", 3, "Birds");
    var myString4 = gettextCatalog.getPlural("Bird2", 4, "Birds2", "Context2");
});
