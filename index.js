import express from 'express';
import mysql from "mysql";
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"pass",
    database:"todo", 
})

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.get("/api",(req,res) =>{
    res.json("API DATA")
})

app.get("/todo",(req,res)=>{
    const q = "SELECT * FROM PROJECT";
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/LOGIN",(req,res)=>{
    const q = "SELECT * FROM users";
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

// app.get("/post",(req,res)=>{
//     const q = "INSERT INTO PROJECT VALUES(3,'TWO','DATE1','DATE2')";
//     db.query(q,(err,data)=>{
//         if(err) return res.json(err)
//         return res.json(data)
//     })
// })

app.post('/post', (req, res) => {
    const q = "INSERT INTO PROJECT values (?)"
    const values = [req.body.id,req.body.title,req.body.createdDate,req.body.updatedDate]

    db.query(q,[values],(err,data) => {
        if(err) return res.json(err);
        return res.json("Created TODO");
    })
});

app.post('/signup', (req, res) => {
    const q = "INSERT INTO user values (?)"
    const values = [req.body.username,req.body.password]

    db.query(q,[values],(err,data) => {
        if(err) return res.json(err);
        return res.json("Created user");
    })
});


 app.listen(8800, ()=>{
    console.log("Server Running");
 })   