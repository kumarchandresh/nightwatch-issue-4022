const fs = require('fs')
const path = require('path')
var interval

module.exports = {
    before: function () {
        const memoryUsageDir = path.join(__dirname, 'memory-usage')
        fs.mkdirSync(memoryUsageDir, { recursive: true })
        const csvFile = path.join(memoryUsageDir, `pid_${process.pid}.csv`)
        fs.writeFileSync(csvFile, 'time,rss,heapUsed\n')
        interval = setInterval(function () {
            const time = new Date().getTime()
            const { rss, heapUsed } = process.memoryUsage()
            fs.appendFileSync(csvFile, [time, rss, heapUsed].join(',') + '\n')
        }, 5000)
    },
    after: function () {
        if (interval) clearInterval(interval)
    },
}