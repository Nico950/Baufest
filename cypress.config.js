const { defineConfig } = require('cypress')
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')
const { isFileExist, findFiles } = require('cy-verify-downloads');

module.exports = defineConfig({
	projectId: '8enutb',
	watchForFileChanges: false,
	chromeWebSecurity: false,
	// reporter: 'mochawesome',
	reporter: 'mocha-junit-reporter',
	reporterOptions: {
		mochaFile: 'reports/test-results.xml',
		toConsole: true,
		outputs: true,
        testCaseSwitchClassnameAndName: true
    },
	retries: 0,
	video: false,
	e2e: {
		experimentalSessionAndOrigin: true,
		// We've imported your old cypress plugins here.
		// You may want to clean this up later by importing these.
		setupNodeEvents(on, config) {
			on('task', { downloadFile })
			on('task', { isFileExist, findFiles })
			return require('./cypress/plugins/index.js')(on, config)			
		},		
		specPattern: ['**/*.feature', 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
		baseUrl: 'https://www.demoblaze.com/index.html',
	},
})
