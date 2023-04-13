const express=require('express')
const mysql=require('mysql')
var bodyparser=require('body-parser');
const cors=require('cors')

const path=require('path');
const twilio = require('twilio'); 

//twilio requirements -- Texting API 
const accountSid = 'AC8c0f99a3157a33696ff030cb1c258c4d';
const authToken = '79d0c16780e6a7c98fb40b997df764ab'
const client = new twilio(accountSid, authToken);

const db=mysql.createPool({
    connectionLimit:100,
    host:"localhost",
    user:"root",
    password:"",
    database:"climate",
});

db.getConnection((err)=>{
if(err) throw err
    

else{
    console.log("Successfully connected")
}
});

app=express();
// app.use('/images',express.static("images"))
app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors());
app.post("/Register",function (req, res) {
    
    const phone=req.body.phone;

    const password=req.body.password;
    const pin=req.body.pin;
    const gender=req.body.gender;
    const place=req.body.place;
    const insertData = "insert into credentials (phone,password,pin,gender,place) values(?,?,?,?,?)";
    db.query(insertData, [phone,password,pin,gender,place], (err, result) => {
          if (err) throw err;
          else{
            res.send(result);
            
          }
        
      });
    })
    app.post("/Login",(req,res)=>{
        const phone=req.body.phone;
        const password=req.body.password;
        const sql="select * from credentials where phone=? and password=?";
        db.query(sql,[phone,password],(err,result,fields)=>{
            if(err)throw err;
            if(result.length>0){
                res.send({message:"Login Successfully"});
            }
            else{
                res.send({message:"Not found"});
            }
        })
    })
    app.get('/send-text', (req, res) => {
        //Welcome Message
        const ans="select phone from credentials";
        res.send('Hello to the Twilio Server')
    
        //_GET Variables
        const { recipient, textmessage } = req.query;
    
    
        //Send Text
        client.messages.create({
            body:textmessage,
            from: "+13205924933",
             to:  "+91"+ans,
        }).then((message) => console.log(message.body));
    })
app.listen(8080,()=>{
    console.log("server listening");
 });