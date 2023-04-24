let express=require('express');
let app=express();
let session=require('express-session');
//let loginmodule = require("./loginModule")

const oneDay = 1000 * 60 * 60 * 24;

app.use(session({
    secret:"thisismysecretkey",
    saveUninitialized:true,
    cookie:{maxAge: oneDay},
    resave:false
}))

app.get('/setData',function(req, res){
    req.session.user = "Shrilata"
    req.session.email = "shri@gmail.com"
    res.send('Session set');
    });
    
app.get('/getData',function(req, res){
    console.log(req.session.user + "   " + req.session.email)
    res.send("Name : " + req.session.user + "<br> Email : " + req.session.email);
});

app.listen(4000,()=>{
    console.log("server running")
})        


/*  To destroy session you can use:
  req.session.destroy(function(error){
     console.log("Session Destroyed")
  })
*/