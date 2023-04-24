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

app.get("/", (req,res) => {
    res.sendFile("/userdata-for-session.html", {root:__dirname})
})

app.get('/setInfo',function(req, res){
    req.session.user = req.query.uname
    req.session.email = req.query.email
    var str = "Thank you " + req.query.uname + "  for your info<br>"
    str += "Follow <a href='getInfo'>this</a> link for your query"
    res.send(str);
    });
    
app.get('/getInfo',function(req, res){
    var str = "Welcome " + req.session.user + " <br>"
    str += "We will shortly get in touch with you @ " + req.session.email
    res.send(str);
});

app.listen(4000,()=>{
    console.log("server running")
})        


/*  To destroy session you can use:
  req.session.destroy(function(error){
     console.log("Session Destroyed")
  })
*/