const express = require("express")
const app = express()
const morgan = require('morgan')
const layout = require('./views/layout')


app.use(morgan('dev'))  
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

const PORT = 1300
app.get("/",(req,res)=>{
    const example = layout('')
    res.send(example) 
    
})

app.listen(PORT, ()=>{
    console.log(`app listening in port ${PORT}`)
})