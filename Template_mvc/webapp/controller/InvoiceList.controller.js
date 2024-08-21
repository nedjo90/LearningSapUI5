sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel",
  ],
  (Controller, History, JSONModel) => {
    "use strict";

    return Controller.extend("ui5.template.controller.InvoiceList", {
      onNavBack() {
        const oHistory = History.getInstance();
        const sPreviousHash = oHistory.getPreviousHash();
        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("main", {}, true);
        }
      },

      handleDelete(oEvent) {
        // let oModel = this.getView().getModel("invoices").getProperty();
        // console.clear();
        // console.log(oModel)

        let oList = oEvent.getSource();
        let oItem = oEvent.getParameter("listItem").oBindingContexts.invoices;

        console.clear();
        console.log("oItem = ", oItem);

        const sPath = oItem.sPath;

        console.log("sPath = ", sPath);

        oList.attachEventOnce("updateFinished", oList.focus, oList);

        let oModel = this.getView().getModel("invoices");

        console.log("oModel = ", oModel);

        // let temp = oModel.splice(1, 1);

        // console.log("temp = ", temp);

        let oProp = oModel.getProperty("/Invoices");

        console.log("prop = ", oProp);

        let index = sPath.split("/").slice(-1)[0];

        oProp.splice(index, 1);

        console.log("updated prop = ", oProp);

        oModel.setProperty("/Invoices", oProp);

        // let oModel = new JSONModel(
        //     sap.ui.require.toUrl("ui5/template/model/invoices.json")
        //   );
        //   console.log(Object.getOwnPropertyNames(oModel));
      },
    });
  }
);
