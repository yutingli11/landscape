module.exports = function(app) {
    
    // logged-in user homepage //
    
    app.get('/', function(req, res) {
        
        res.render('home', {
            title : 'Home'
        });
    });

    app.get('/home', function(req, res) {
        
        res.render('home', {
            title : 'Home'
        });
    });

    app.get('/projects', function(req, res) {
        
        res.render('projects', {
            title : 'Projects'
        });
    });

    app.get('/route1', function(req, res) {
        
        res.render('route1', {
            title : 'Route1'
        });
    });

    app.get('/gallery', function(req, res) {
        
        res.render('gallery', {
            title : 'Gallery'
        });
    });

    app.get('/videos', function(req, res) {
        
        res.render('videos', {
            title : 'Videos'
        });
    });
    
    app.get('/membership', function(req, res) {
        
        res.render('membership', {
            title : 'Membership'
        });
    });

    app.get('/memberActivities', function(req, res) {
        
        res.render('memberActivities', {
            title : 'MemberActivities'
        });
    });

    app.get('/news', function(req, res) {
        
        res.render('news', {
            title : 'News'
        });
    });

    app.get('/newsDetails', function(req, res) {
        
        res.render('newsDetails', {
            title : 'newsDetails'
        });
    });

    app.get('/contact', function(req, res) {
        
        res.render('contact', {
            title : 'Contact'
        });
    });

    app.post('/contact', function(req, res){
        // look up the user's account via their email //
            // AM.getAccountByEmail(req.body['email'], function(o){
                var o = req.body['email'];
                if (o)
             {
                //     EM.dispatchResetPasswordLink(o, function(e, m){
                //     // this callback takes a moment to return //
                //     // TODO add an ajax loader to give user feedback //
                //         if (!e)
                //    {
                //             res.status(200).send('ok');
                //         }
                //    else
                //    {
                //             for (k in e) console.log('ERROR : ', k, e[k]);
                //             res.status(400).send('unable to dispatch password reset');
                //         }
                //     });
                }
             else
             {
                    res.status(400).send('email-not-found');
                }
            // });
        });


    app.get('/about', function(req, res) {
        
        res.render('about', {
            title : 'About'
        });
    });
    
    
    
    app.get('*', (req, res) => res.render('404', { 
        title: 'Page Not Found'
    }));
};