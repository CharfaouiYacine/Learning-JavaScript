const express =  require('express')
const router = express.Router()
const {showTasks,addTask,deleteTask,markAsDone,markAsUndone,modifyTask} = require('../controllers/todolistFunctions')
router.get('/tasks',showTasks)

router.post('/addtask',addTask)

router.delete('/deletetask/:id',deleteTask)

router.patch('/markasdone/:id',markAsDone)

router.patch('/markasundone/:id',markAsUndone)

router.patch('/modify/:id',modifyTask)

module.exports = router