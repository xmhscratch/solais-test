module.exports = {
    '/': {
        GET: function(req, res, next) {
            res.render('index')
        }
    },

    '/mytest': {
        GET: [
            // System.Api.Protection.OAuthV2(),
            function(req, res, next) {
                res.json({ test: '345345' })
            }
        ]
    },

    '/test-middware': {
    	'GET, POST': [
    		function(req, res, next) {
    			res.locals['test'] = 'hello world'

                const { test } = helper('string')
                const { toUSD } = helper('convert/currency')

    			return next()
    		},

    		function(req, res, next) {
    			res.json(res.locals)
    		},
    	]
    }
}
