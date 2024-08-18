sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";
  return Controller.extend("sap.ui.demo.controller.App", {
    incrementBy1: function () {
      let myTextElement = this.getView().byId("counter");
      let myNum = parseInt(myTextElement.getText());
      let myNewNum = myNum + 1;
      myTextElement.setText(myNewNum);
    },
  });
});
