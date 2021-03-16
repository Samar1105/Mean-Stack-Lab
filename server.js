// modules =================================================
const express = require ( 'express' );
const app = express ();
// set our port
const port = 3000 ;
app.get ( '/' , ( req , res ) => res.send ( 'Welcome to Mean stack : Summer Gagneja 1805564' ));// startup our app at http://localhost:3000
app.get('/contactus', (req, res) => res.send('Welcome to Contact Us Page'))
app.get('/about', (req, res) => res.send('Welcome to About Page'))

app.get('/product', (req, res) => res.send('Welcome to Products Page'))
app.get('/product/:id', (req, res) => {
    res.send('Welcome to Product Detailed Page');
})
app.listen ( port , () =>console.log ( `Example app listening on port ${port}!` ));