const system = new (require('solais'))

system
    .bootstrap()
    .then(() => {
        return system.install([
            require('solais-server'),
            // require('solais-server-static'),
            // require('solais-server-api'),
            // require('solais-orm')
        ])
    })
    // .then(() => {
    //     global.$db = new System.Orm.Db()

    //     return $db
    //         .connect('claimh')
    //         .then(() => {
    //             $db.import('./model')
    //         })
    // })
    // .then(() => {
    //     $appl.use((req, res, next) => {
    //         const $my = new System.Orm.Db()

    //         $my
    //             .connect('claimh')
    //             .then(() => {
    //                 $db.import('./model/my')
    //             })

    //         req.$my = $my
    //         return next()
    //     })
    // })
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
