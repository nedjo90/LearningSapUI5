sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
  (UIComponent, JSONModel) => {
    "use strict";

    return UIComponent.extend("ui5.template.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json",
      },
      init() {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);

        const oModel = new JSONModel(
          sap.ui.require.toUrl("ui5/template/model/componentData.json")
        );
        this.setModel(oModel, "componentModel");
      },
    });
  }
);
