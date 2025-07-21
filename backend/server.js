 import express from "express"

const app = express()

app.get("/api/notes", (request,response) => {
    //send the notes
    response.status(200).send("You got 5 notes");
});

app.post("/api/notes", (request,response) => {
    //ceate the notes
    
});

app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
});