const system = new (require('solais'))

system
    .bootstrap()
    .then(() => {
        return system.install([
            require('solais-server'),
            // require('solais-server-static'),
            // require('solais-server-api'),
            require('solais-orm')
        ])
    })
    .then(() => {
        global.$db = new System.Orm.TenancyManager('webgate')

        console.log($db.getMember('d5437091-2b01-4f0b-828a-692c473c2f0c'))

        $server.start()
        $server.autoRefresh()
    })
    .catch((error) => {
        console.log(error)
    })

if (global.gc) {
    global.gc() & setInterval(function() {
        return global.gc()
    }, 1800000)
}
