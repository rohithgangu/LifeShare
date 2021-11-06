const express = require("express");
const morgan = require("morgan");
const cors =require("cors");
const bodyParser = require("body-parser");
 const User = require("./models/user");
 const db = require('./models/db')
const app = express()
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

const port = 4000;



app.listen(port , ()=> {
    console.log("web server started");
})
app.get('/',(req,res)=>{
    res.json({ "webpage" : "working" })
})

app.get('/donor',(req,res)=>{
    db.donorregschema.find({}).then((data)=>{
        res.json(data)
    })
});


app.post("/regis",(req,res)=>{
    const {email,password,username,age,adharno,phoneno,address,city,state,zipcode,bloodgroup} = req.body
    const user = new db.donorregschema({
        email,password,username,age,adharno,phoneno,address,city,state,zipcode,bloodgroup
    })
    user.save(err=>{
        if(err){
            res.send(err)
        }
        else{
            res.send({message:"registered successfully"})
        }
    })
})

app.post("/login",(req,res)=>{
    const {email,password} =req.body;
    db.donorregschema.findOne({email:email},(err,user)=>{
        if(user){
           if(password === user.password){
               res.send({message:"login success",user:user})
           }else{
               res.send({message:"wrong credentials"})
           }
        }else{
            res.send("not register")
        }
    })
});

app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}

app.put('/edituser',(req,res)=>{
    db.donorregschema.findByIdAndUpdate(req.body.id , {username:`${req.body.username}`},{new:true}).then((data)=>{
        res.json(data)
    })
})

app.delete('/deleteuser',(req,res)=>{
    db.donorregschema.findByIdAndDelete(req.body.id,{username:`${req.body.username}`}).then((data)=>{
        res.json(data)
    })
})

app.get('/searchAp',(req,res)=>{
    db.donorregschema.find({bloodgroup:'A+'}).then((data)=>{
        res.json(data)
    })
})

app.get('/searchAn',(req,res)=>{
    db.donorregschema.find({bloodgroup:'A-'}).then((data)=>{
        res.json(data)
    })
})

app.get('/searchBp',(req,res)=>{
    db.donorregschema.find({bloodgroup:'B+'}).then((data)=>{
        res.json(data)
    })
})

app.get('/searchBn',(req,res)=>{
    db.donorregschema.find({bloodgroup:'B-'}).then((data)=>{
        res.json(data)
    })
})

app.get('/searchABp',(req,res)=>{
    db.donorregschema.find({bloodgroup:'AB+'}).then((data)=>{
        res.json(data)
    })
})

app.get('/searchABn',(req,res)=>{
    db.donorregschema.find({bloodgroup:'AB-'}).then((data)=>{
        res.json(data)
    })
})

app.get('/searchOp',(req,res)=>{
    db.donorregschema.find({bloodgroup:'O+'}).then((data)=>{
        res.json(data)
    })
})

app.get('/searchOn',(req,res)=>{
    db.donorregschema.find({bloodgroup:'O-'}).then((data)=>{
        res.json(data)
    })
})

