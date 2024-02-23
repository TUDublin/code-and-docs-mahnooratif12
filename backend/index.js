import express from "express"
import mysql from "mysql"

const app = express ()
app.use(express.json())

app. get("/", (req,res)=>{
    res.json("hello this is the backend")
})

app.post("/personal-info", (req,res)=>{
    const q = "INSERT INTO personal-info('MRN','forename','lastname')  VALUES (?)"
    const values = [ "Forename from backdend","Lastname from backdend"]

    db.query(q,[values], (err,data) => {
        if(err) return res.json(err)
        return res.json("New Use is Added Successfully !")
    })
    
})

app.get("/personal-info", (req,res)=>{
    const q = "SELECT * FROM tuh.`personal-info`;"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
    
})

app.get("/blood_tests", (req,res)=>{
    const q = "SELECT * FROM tuh.`blood_tests`;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})



const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"tuh"
})



app.listen(3060, ()=>{
    console.log("Connected to backend!");
})
