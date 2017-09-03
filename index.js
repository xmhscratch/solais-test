const system = global.system = new (require('solais'))

system.bootstrap()
    .then(() => {
        return system.install([
            require('solais-server'),
            require('solais-server-static')
        ])
    })
    .then(() => {
        // console.log(config)
        // $server.start()
    })


if (global.gc) {
    global.gc() & setInterval(function() {
        return global.gc()
    }, 1800000)
}
