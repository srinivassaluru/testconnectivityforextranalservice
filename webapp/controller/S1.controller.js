sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/ui5/testconnectivityforextranalservice/model/Formatter",
    "sap/ui/model/json/JSONModel"
],
function (Controller,Formatter, JSONModel) {
    "use strict";

    return Controller.extend("com.ui5.testconnectivityforextranalservice.controller.S1", {
        formatter: Formatter,
        onInit: function () {

        },
        onAfterRendering: function(){

            $.ajax({
                url: this._getRuntimeBaseURL() + "/content/dam/procurement/guide-for-suppliers/cardManifests.json",
                method: "GET",
                async: false,
                headers: {
                    "X-CSRF-Token": "Fetch"
                },
                success: function (result) {
                    // debugger;
                    console.log(result);
                    var jsonModel = new JSONModel();
                    jsonModel.setData([
                        {
                            url: "http://www.google.com"
                        }
                    ]);
                    this.getView().setModel(jsonModel, "domainModel");
                    
                }.bind(this)
            });

        },
        _getRuntimeBaseURL: function () {
            var appId = this.getOwnerComponent().getManifestEntry("/sap.app/id");
            var appPath = appId.replaceAll(".", "/");
            var appModulePath = jQuery.sap.getModulePath(appPath);
            return appModulePath;
        }
    });
});
