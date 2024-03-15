import {
    getAllTasks, getSingleTaskByID, postNewTask,
    updateTask, deleteTaskByID
} from "../Controller/taskController.js";
import express from 'express'

const router = express.Router()

router.get('/tasks', getAllTasks)
router.get('/tasks/:id', getSingleTaskByID)
router.post('/tasks', postNewTask)
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTaskByID)


export default router