jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Employees in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"MockData/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"MockData/test/integration/pages/App",
	"MockData/test/integration/pages/Browser",
	"MockData/test/integration/pages/Master",
	"MockData/test/integration/pages/Detail",
	"MockData/test/integration/pages/Create",
	"MockData/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "MockData.view."
	});

	sap.ui.require([
		"MockData/test/integration/MasterJourney",
		"MockData/test/integration/NavigationJourney",
		"MockData/test/integration/NotFoundJourney",
		"MockData/test/integration/BusyJourney",
		"MockData/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});