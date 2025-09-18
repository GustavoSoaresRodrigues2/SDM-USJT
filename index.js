const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const lembretes = {}
app.use(bodyParser.json)
let contador = 0

// Listar lembretes
app.get("/lembretes", (req, res) => {
    res.send(lembretes)
})

// Criar lembretes
app.put("/lembretes", (req, res) => {
    contador++
    const {texto} = req.body
    lembretes[contador] = {contador, texto}
    res.status(201).send(lembretes[contador])
})

app.listen(666, () => {
    console.log("Lembretes da porta.")
})