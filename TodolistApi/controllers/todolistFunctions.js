const {Client} = require("pg");
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: "5432",
    password: "Password",
    database: "todo"
})
client.connect()

const showTasks = async (req,res)=>{
    try {
        let data = await client.query('SELECT * FROM todolist')
        let data_rows = data.rows
        if (data_rows.length === 0) {
            res.send('The List is Empty')
        } else {
            res.status(200).json({success:true,tasks:data_rows})
        }
    } catch (err) {
        res.status(204).send(`Database Error: ${err.message}`)
    }
}
const addTask = async (req,res)=>{
    const {task} = req.body
    if(task.length===0){
        res.status(204).json({success:true,msg:'Task Is not provided'})
    }else{
        try {
            await client.query('INSERT INTO todolist (name) VALUES ($1)', [task])
            let data = await client.query('SELECT * FROM todolist')
            res.status(200).json({success:true,msg:`task added successfully`,data:data.rows})
        } catch (err) {
            res.status(204).json({success:false,msg:`Database Error: ${err.message}`})
        }
    }
}
const deleteTask = async (req,res)=>{
    try{
        let result = await client.query(`DELETE FROM todolist  WHERE id = $1`,[req.params.id])
        if (result.rowCount ===0){
            res.status(404).json({success:true,msg:`The id doesn't exist in the tasks`})
        }else{
            let data = await client.query('SELECT * FROM todolist')
            res.status(200).json({success:true,msg:"Task Deleted Successfully",data:data.rows})
        }
    }catch (err){
        res.status(400).send(`DataBase Error:${err.message}`)
    }
}
const markAsDone = async (req,res)=>{
    try {
        let result = await client.query(`UPDATE todolist SET completed = TRUE WHERE id = $1`, [req.params.id])
        let data = await client.query('SELECT * FROM todolist')
        if (result.rowCount === 0) {
            res.status(404).json({success:true,msg:"Task not found or doesn't exist",data:data.rows})
        } else {
            res.status(200).json({success:true,msg:"Task Deleted Successfully",data:data.rows})
        }
    } catch (err) {
        res.status(404).json({success:false,msg:`DataBase Error:${err.message}`})
    }
}
const markAsUndone = async (req,res)=>{
    try {
        let result = await client.query(`UPDATE todolist SET completed = FALSE WHERE id = $1`, [req.params.id])
        let data = await client.query('SELECT * FROM todolist')
        if (result.rowCount === 0) {
            res.status(404).json({success:true,msg:"Task not found or doesn't exist",data:data.rows})
        } else {
            res.status(200).json({success:true,msg:"Task Deleted Successfully",data:data.rows})
        }
    } catch (err) {
        res.status(404).json({success:false,msg:`DataBase Error:${err.message}`})
    }
}
const modifyTask = async (req,res)=>{
    try {

        if(req.body.name.length === 0) {
            res.status(404).json({success:false,msg:"can't enter an empty task"})
        }else {
            let result = await client.query(`UPDATE todolist
                                             SET name = $1
                                             WHERE id = $2`, [req.body.name, req.params.id])
            let data = await client.query('SELECT * FROM todolist')
            if (result.rowCount === 0) {
                res.status(404).json({success: false, msg: "didn't find task or it doesn't exist", data: data.rows})
            } else {
                res.status(200).json({success: true, msg: "task modified successfully", data: data.rows})
            }
        }
    } catch (err) {
        res.status(404).json({success:false,msg:`DataBase Error:${err.message}`})
    }
}

module.exports = {showTasks,addTask,deleteTask,markAsDone,markAsUndone,modifyTask}