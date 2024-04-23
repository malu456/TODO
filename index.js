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



app.get("/todo",(req,res)=>{
    const q = "SELECT * FROM TODOLIST";
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/login",(req,res)=>{
    const q = "select * from users where username = ? and password = ?";
    const values=[req.body.username,req.body.password];

    db.query(q,[...values],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.delete("/todo/:id", (req, res) => {
    const todoId = req.params.id;
    const q = " DELETE FROM todolist WHERE id = ? ";
  
    db.query(q, [todoId], (err, data) => {
      if (err) return res.send(err);
      return res.json("DELETED TODO ...");
    });
  });
  
// app.get("/post",(req,res)=>{
//     const q = "INSERT INTO PROJECT VALUES(3,'TWO','DATE1','DATE2')";
//     db.query(q,(err,data)=>{
//         if(err) return res.json(err)
//         return res.json(data)
//     })
// })

app.post('/post', (req, res) => {
    const q = "INSERT INTO todolist values (?)"
    const values = [req.body.id,req.body.description,req.body.status,req.body.createdDate,req.body.updatedDate]

    db.query(q,[values],(err,data) => {
        if(err) return res.json(err);
        return res.json("Created TODO ...");
    })
});

app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const q = 'UPDATE todolist SET description = ? , status = ? , createdDate = ? , updatedDate = ? where id = ?';
    const values = [req.body.description,req.body.status,req.body.createdDate,req.body.updatedDate];

    db.query(q,[...values,id],(err,res) => {
        if(err) return res.send(err);
        return res.json("UPDATED TODO ...");
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