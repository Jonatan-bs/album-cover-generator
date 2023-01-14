module.exports = {
	plugins: ["stylelint-scss"],
	extends: "stylelint-config-recommended-scss",
	rules: {
		"scss/dollar-variable-pattern": /^[a-z][a-zA-Z0-9]+$/,
		"declaration-property-unit-allowed-list": { "font-size": ["rem"] },
		"no-duplicate-selectors": true,
	},
};
