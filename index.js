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

        $db.createMember()
         // .then(console.log)
        // $db.getMember(
        //     '1b3d6c7b-295c-4e00-884c-dde01a763d2f'
        // ).then(console.log)
        // $db.removeMember(
        //     '1b3d6c7b-295c-4e00-884c-dde01a763d2f'
        // ).then(console.log)

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
