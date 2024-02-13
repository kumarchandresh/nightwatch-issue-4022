
/*
 * This file is auto generated.
 * To make changes to all test scripts, modify scripts/generate.js
 */

module.exports = {

    'test_01': function (browser) {
        browser.init()
        for (let i = 1; i <= 2400; i += 20) {
            for (let j = 0; j < 20; ++j) {
                browser.waitForElementPresent('xpath', `//*[text()="${i + j}"]`)
            }
            browser.execute(function () {
                window.FLAG_GO_NEXT = true
            })
        }
    },

    'test_02': function (browser) {
        browser.init()
        for (let i = 1; i <= 2400; i += 20) {
            for (let j = 0; j < 20; ++j) {
                browser.waitForElementPresent('xpath', `//*[text()="${i + j}"]`)
            }
            browser.execute(function () {
                window.FLAG_GO_NEXT = true
            })
        }
    },
}