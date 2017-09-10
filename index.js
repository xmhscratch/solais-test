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
        const { MultiTenancy } = System.Orm
        const multiTenancy = new MultiTenancy()

        return multiTenancy.initialize('webgate')
    })
    .then(($db) => {
        global.$db = $db

        // $db.createMember()
        // $db.removeMember(
        //     '98f98085-9ff0-458b-a5ea-61a3b33ae17b'
        // )

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
