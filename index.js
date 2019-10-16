const what = require('what-line-is-this')
console.log = what.use(console.log).relative()
console.error = what.use(console.error).relative()
