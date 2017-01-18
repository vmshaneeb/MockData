jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"MockData/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"MockData/test/integration/pages/App",
	"MockData/test/integration/pages/Browser",
	"MockData/test/integration/pages/Master",
	"MockData/test/integration/pages/Detail",
	"MockData/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "MockData.view."
	});

	sap.ui.require([
		"MockData/test/integration/NavigationJourneyPhone",
		"MockData/test/integration/NotFoundJourneyPhone",
		"MockData/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});