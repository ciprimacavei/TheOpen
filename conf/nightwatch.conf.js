module.exports = {
    test_settings: {
      default: {
        // A default environment is always required from which the other environments inherit the settings.
        // We can overwrite any test setting for each environment as needed.
        launch_url: 'https://www.theopen.com',
        globals: {
          waitForConditionPollInterval: 500,
          waitForConditionTimeout: 10000,
          retryAssertionTimeout: 5000 //automatically retry failed assertions until a given timeout is reached, before the test runner gives up and fails the test.
        },
        screenshots: {
          enabled: true,
          on_failure: true,
          path: './screenshots/cucumberScreenshots/'
        },
        webdriver: {
          // This is the actual runner for Cucumber tests and is required here, along with the desiredCapabilities.
          start_process: true,
          server_path: require('chromedriver').path,
          port: 4445,
          log_path: './tests_output/cucumberLogs/',
          cli_args: ['--port=4445']
        },
        desiredCapabilities: {
          browserName: 'chrome',
          chromeOptions: {
            args: [
              'start-maximized',
              'disable-web-security',
              'safebrowsing-disable-download-protection'
            ]
          },
          loggingPrefs: { driver: 'OFF', server: 'OFF', browser: 'OFF' } //set to INFO in order to enable
        }
      }
    }
  };
  