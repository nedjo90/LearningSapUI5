sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("ui5.template.controller.NestedView", {
      onInit: function () {
        let oModel = new JSONModel(
          sap.ui.require.toUrl("ui5/template/model/controllerData.json")
        );
        this.getView().setModel(oModel, "controllerModel");
      },
      onPressComponent: function () {
        alert(
          this.getOwnerComponent()
            .getModel("componentModel")
            .getProperty("/helloComponent")
        );
      },
      onPressManifest: function () {
        alert(
          this.getOwnerComponent()
            .getModel("manifestModel")
            .getProperty("/helloManifest")
        );
      },
      async onOpenDialog() {
        this.oDialog ??= await this.loadFragment({
          name: "ui5.template.view.MyFragment",
        });
        this.oDialog.open();
      },
      onCloseDialog() {
        this.byId("myDialog").close();
      },
    });
  }
);
