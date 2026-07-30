const express = require('express')
const app = express()

const todotasks = require('./routes/todotasks')

app.use(express.json())

app.use('/todolist',todotasks)

app.get('/',(req,res)=>{
    res.send('<h1>Todo List Page</h1>')

})
app.listen(2000 ,()=>{
    console.log(`Server Listening on port 2000`)
})