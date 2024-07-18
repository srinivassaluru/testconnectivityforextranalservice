sap.ui.define(function () {
    "use strict";

    var Formatter = {

        changeContext: function (sData, sDomainURL) {

            if (sData && sData.indexOf("https://procurement.amtrak.com")) {

                return sData.replace('https://procurement.amtrak.com', sDomainURL);

            } else {
                return sData;
            }

        }
    };

    return Formatter;

}, /* bExport= */ true);
