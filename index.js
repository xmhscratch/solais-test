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
        return new System.Orm.Tenancy.Multi('webgate')
            .initialize()
            .then(($db) => {
                global.$db = $db

                // $db
                //     .createMember()
                //     .then((member) => {
                //         // console.log(member)
                //         // console.log($db._members)
                //     })

                // $db.removeMember(
                //     '98f98085-9ff0-458b-a5ea-61a3b33ae17b'
                // )
            })
    })
    .then(() => {
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
