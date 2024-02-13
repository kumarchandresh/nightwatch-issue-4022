// Helper script to generate a bunch of identical tests

const fs = require('fs')
const path = require('path')

const counterLimit = 2400
const counterStep = 20

for (let i = 1; i <= 10; ++i) {
    const groupDir = path.resolve(__dirname, '..', 'tests', 'group_' + (i).toString().padStart(2, '0'))
    fs.mkdirSync(groupDir, { recursive: true })
    for (let j = 1; j <= 10; ++j) {
        const filePath = path.join(groupDir, 'suite_' + (j).toString().padStart(2, '0') + '.js')
        let fileContent = `
/*
 * This file is auto generated.
 * To make changes to all test scripts, modify scripts/generate.js
 */

module.exports = {
`;
        for (let k = 1; k <= 2; ++k) {
            fileContent = fileContent.concat(`
    'test_${(k).toString().padStart(2, '0')}': function (browser) {
        browser.init()
        for (let i = 1; i <= ${counterLimit}; i += ${counterStep}) {
            for (let j = 0; j < ${counterStep}; ++j) {
                browser.waitForElementPresent('xpath', \`//*[text()="\${i + j}"]\`)
            }
            browser.execute(function () {
                window.FLAG_GO_NEXT = true
            })
        }
    },
`)
        }
        fileContent = fileContent.concat('}')
        fs.writeFileSync(filePath, fileContent)
    }
}