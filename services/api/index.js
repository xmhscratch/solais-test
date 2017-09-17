const system = new (require('solais'))

system
    .bootstrap()
    .then(() => {
        return system.install([
            require('solais-server'),
            require('solais-orm'),
            require('solais-server-api')
        ])
    })
    .catch((error) => {
        console.error(error)
    })

console.time('test')

system.once('ready', () => {
    console.timeEnd('test')
    // const { MultiTenancy } = System.Orm
    // const multiTenancy = new MultiTenancy()

    // return multiTenancy.initialize('webgate')

    // global.$db = $db

    // $db.createMember().then(console.log)
    // const tenantId = 'fac65886-3ca0-4706-af00-926d34472799'
    // $db.getMember(tenantId).then(console.log)
    // $db.removeMember(tenantId).then(console.log)

    $server.start()
    // $server.autoRefresh()
})

if (global.gc) {
    global.gc() & setInterval(function() {
        return global.gc()
    }, 1800000)
}
