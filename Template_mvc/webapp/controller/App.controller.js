sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("ui5.template.controller.App", {
      onPressComponent: function () {
        alert(this.getOwnerComponent().getModel("componentModel").getProperty("/helloComponent"));
      },
      onPressManifest: function () {
        alert(this.getOwnerComponent().getModel("manifestModel").getProperty("/helloManifest"));
      },
      onInit: function () {
        let oModel = new JSONModel(
          sap.ui.require.toUrl("ui5/template/model/controllerData.json")
        );
        this.getView().setModel(oModel, "controllerModel");
      },
    });
  }
);
