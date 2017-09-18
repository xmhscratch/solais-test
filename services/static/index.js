const system = new (require('solais'))

system
    .bootstrap()
    .then(() =>
        system.install([
            require('solais-server'),
            // require('solais-orm'),
            // require('solais-server-static'),
            // require('solais-server-api')
        ])
    )
    .catch((error) => {
        console.error(error)
    })

system.once('ready', () => {
    $server.start()
    $server.autoRefresh()
})

if (global.gc) {
    global.gc() & setInterval(function() {
        return global.gc()
    }, 1800000)
}
