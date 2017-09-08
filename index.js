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
        // global.$db = new System.Orm.Tenancy.Multi('webgate')

        // $db.getModerator()
        // $db.getMember('d5437091-2b01-4f0b-828a-692c473c2f0c')
        // var test = new System.Orm.Db()
        // test.connect(null)
        //     .then(() => {
        //         console.log(test.connection.query)
        //     })
        //     .catch(error => {
        //     })

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
