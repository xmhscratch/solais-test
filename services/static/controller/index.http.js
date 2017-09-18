module.exports = {
    '/': {
    	HEAD: function(req, res, next) {
            res.render('index')
        },
        GET: function(req, res, next) {
            res.render('index')
        },
        POST: function(req, res, next) {
            res.render('index')
        },
        PUT: function(req, res, next) {
            res.render('index')
        },
        OPTIONS: function(req, res, next) {
            res.render('index')
        },
        DELETE: function(req, res, next) {
            res.render('index')
        }
    }
}
