const express = require('express');

const path = require("path");
const cors = require('cors');
const pool = require('./db');
const app = express();


app.listen(8080, () => {
    console.log("server has started listening on port 8080");
});
//Middleware
app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});


//Routes//
//add a word

app.post("/words", async (req, res) => {
    try {
        const { name, definition, detail, author, time } = req.body;
        const newWord = await pool.query("insert into words (name,definition,detail,author,time) values ($1,$2,$3,$4,$5) returning *",
            [name, definition, detail, author, time])
        res.json(newWord.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})
//get words

app.get("/words", async (req, res) => {
    try {
        const words = await pool.query("select * from words order by id");
        res.json(words.rows);

    } catch (error) {
        console.error(error.message);
    }
})

//get a word
app.get("/words/:id", async (req, res) => {
    try {
        const word = await pool.query("select * from words where id=$1", [req.params.id]);
        res.json(word.rows)
    } catch (error) {
        console.error(error.message);
    }
})

//delete a word
app.delete("/words/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const word = await pool.query("delete from words where id=$1", [id]);
        res.json("Deleted!!");
    } catch (error) {
        console.error(error.message);
    }
})

//update a word
app.put("/words/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, definition, detail } = req.body;
        const word = await pool.query("update words set name=$1,definition=$2,detail=$3,time=CURRENT_DATE where id=$4",
            [name, definition, detail, id]);
        res.json("the word is updated");
    } catch (error) {
        console.error(error.message);
    }
})

//get a user
app.get("/users", async (req, res) => {
    try {
        const users = await pool.query("select * from users");
        res.json(users.rows)
    } catch (error) {
        console.log(error.message);
    }
})

app.post("/users", async (req, res) => {
    try {
        const { name, password } = req.body;
        const newWord = await pool.query("insert into users (name,password,date) values ($1,$2,CURRENT_DATE) returning *",
            [name, password])
        res.json(newWord.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

//modify a user's message

app.put("/users", async (req, res) => {
    try {
        const { gender, mail, role, name } = req.body;
        const user = await pool.query("update users set gender = $1,mail = $2,role = $3 where name = $4", [
            gender, mail, role, name
        ])
        res.json(user.rows[0]);
    } catch (error) {
        console.error(error.message)
    }

})

app.post("/messages", async (req, res) => {
    try {
        const { name, msg, time } = req.body;
        const newWord = await pool.query
            ("insert into messages (name,msg,time) values ($1,$2,$3) returning *",
                [name, msg, time])
        res.json(newWord.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

app.get("/messages", async (req, res) => {
    try {
        const response = await pool.query("select * from messages");
        res.json(response.rows);
    } catch (error) {
        console.error(error.message);
    }
})

app.get("/events", async (req, res) => {
    try {
        const response = await pool.query("select * from events")
        res.json(response.rows)
    } catch (error) {
        console.error(error.message);
    }
})

app.post("/events", async (req, res) => {
    try {
        const { name, add, modify, time } = req.body;
        const response = await pool.query(
            "insert into events (name, add, modify,time) values($1, $2, $3, $4 ) returning *",
            [name, add, modify, time]);
    } catch (error) {
        console.error(error.message);
    }
})

app.delete("/events/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const response = await pool.query("delete from events where id=$1", [id]);
    } catch (error) {
        console.error(error.message);
    }
})

app.use(express.static('../Client//build/'));
app.get("*", (req, res) => {
    res.sendFile(path.resolve("../Client/build/index.html"));
});