const system = global.system = new (require('solais'))

system.install([
    require('solais-server')
]).then(() => {
    system.bootstrap()
})

system.once('ready', () => {
    server.start()
})

if (global.gc) {
    global.gc() & setInterval(function() {
        return global.gc()
    }, 1800000)
}
