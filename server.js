let http = require("http");
let express = require("express");

let app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/dashboard",(req,res)=>{
    res.render("dashboard")
})

http.createServer(app).listen(3001, () => {
    console.log("server started");
})