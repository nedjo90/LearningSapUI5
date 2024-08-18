sap.ui.define(
  ["sap/m/Button", "sap/ui/core/mvc/XMLView"],
  function (Button, XMLView) {
    "use strict";

    XMLView.create({
        viewName: "myapp/xml_views.App"
    }).then(function(oView) {
        oView.placeAt("content")
    });

    new Button({
      text: "Hello World",
    }).placeAt("content");
  }
);
