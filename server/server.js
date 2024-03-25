const express = require("express")
const app = express()
const PORT = 8000
const cors = require("cors")

app.use(cors())

app.get("/api/home", (req, res) =>  {
    res.json({
        id: "0",
        amount: 100,
        name: "HP Chromebook",
        category: "Electronics",
        date: "3/20/24"
        })
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})