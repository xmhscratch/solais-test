const system = new (require('solais'))

system
    .bootstrap()
    .then(() => {
        return system.install([
            require('solais-orm'),
            require('solais-server'),
            // require('solais-server-static'),
            require('solais-server-api')
        ])
    })
    .then(() => {
        const { MultiTenancy } = System.Orm
        const multiTenancy = new MultiTenancy()

        return multiTenancy.initialize('webgate')
    })
    .then(($db) => {
        global.$db = $db

        // $db.createMember().then(console.log)
        // const tenantId = 'fac65886-3ca0-4706-af00-926d34472799'
        // $db.getMember(tenantId).then(console.log)
        // $db.removeMember(tenantId).then(console.log)

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
