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

    app.get('/gallery', function(req, res) {
        
        res.render('gallery', {
            title : 'Gallery',
            carouselItemObjss: carouselItemObjsp

        });
    });

    var carouselItemObjsp = [
        {
            p: [{ img: 'http://placehold.it/380?text=1', txtHeader: '添加文字1', txtContent: '添加文字1' },
            { img: 'http://placehold.it/380?text=2', txtHeader: '添加文字2', txtContent: '添加文字2' },
            { img: 'http://placehold.it/380?text=3', txtHeader: '添加文字3', txtContent: '添加文字3' }],
            isActive: 'active'
        },
        {
            p: [{ img: 'http://placehold.it/380?text=4', txtHeader: '添加文字4', txtContent: '添加文字4' },
            { img: 'http://placehold.it/380?text=5', txtHeader: '添加文字5', txtContent: '添加文字5' },
            { img: 'http://placehold.it/380?text=6', txtHeader: '添加文字6', txtContent: '添加文字6' }],
            isActive: ''
        },
        {
            p: [{ img: 'http://placehold.it/380?text=7', txtHeader: '添加文字7', txtContent: '添加文字7' },
            { img: 'http://placehold.it/380?text=8', txtHeader: '添加文字8', txtContent: '添加文字8' },
            { img: 'http://placehold.it/380?text=9', txtHeader: '添加文字9', txtContent: '添加文字9' }],
            isActive: ''
        }
    ];

    app.get('/membership', function(req, res) {
        
        res.render('membership', {
            title : 'Membership'
        });
    });

    app.get('/membershipDetails', function(req, res) {
        
        res.render('membershipDetails', {
            title : 'MembershipDetails'
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