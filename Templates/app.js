const express = require('express');

const app = express();

// set view engine
app.set('view engine', 'ejs');


app.get('/default' ,(req, res) => {
        res.sendfile(__dirname + '/default.html');
});


app.get('/' ,(req, res) => {
        res.render('home');
});
    
// app.get('/profile' ,(req, res) => {
//         res.render('profile');
// });

app.get('/profile' ,(req, res) => {
        res.render('profile', { user: req.query });
});


app.get('/profile/:name' ,(req, res) => {
        res.render('profile', { user: {username : req.params.name} });
});


app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});
