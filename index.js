const system = new (require('solais'))

// const cluster = require('cluster')

// if(cluster.isMaster) {
//     var numWorkers = require('os').cpus().length

//     console.log('Master cluster setting up ' + numWorkers + ' workers...')

//     for(var i = 0; i < numWorkers; i++) {
//         cluster.fork()
//     }

//     cluster.on('online', function(worker) {
//         console.log('Worker ' + worker.process.pid + ' is online');
//     })

//     cluster.on('exit', function(worker, code, signal) {
//         console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal)
//         console.log('Starting a new worker')
//         cluster.fork()
//     })
// } else {
// }

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
    })
    .catch((error) => {
        console.log(error)
    })

if (global.gc) {
    global.gc() & setInterval(function() {
        return global.gc()
    }, 1800000)
}
