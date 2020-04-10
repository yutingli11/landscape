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



    app.get('/about', function(req, res) {
        
        res.render('about', {
            title : 'About'
        });
    });
    
    
    
    app.get('*', (req, res) => res.render('404', { 
        title: 'Page Not Found'
    }));
};