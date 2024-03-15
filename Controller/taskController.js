//In memory data Store
let tasks = [{id:1, "name": "GauRav","duration":4, "language": "C++" }]

export const getAllTasks = (req, res) => {
    res.json(tasks)
};

export const getSingleTaskByID = (req, res) => {
    const taskID = parseInt(req.params.id)
    const task = tasks.find(task => task.id === taskID)
    if (task) {
        res.json(task)
    } else {
        res.status('404').json({ error: "Task does not Present in Tasks DB" })
    }
};

//POST a New Task 
export const postNewTask = (req, res) => {
    const newTask = req.body
    newTask.id = tasks.length + 1
    tasks.push(newTask)
    res.status(201).json(newTask);

};

// PUT/Update Existing Task From Tasks
export const updateTask = (req,res)=>{
   const taskID = parseInt(req.params.id)
   console.log(taskID)
   const updatedTask = req.body
   console.log(updateTask)
   let index = tasks.findIndex(task => task.id === taskID)
   if(index !== -1){
    tasks[index] = {...tasks[index], ...updatedTask}
    res.json(tasks[index])
   }else{
    res.status('404').json({error:"Task Not Found"})
   }

};

export const deleteTaskByID = (req,res)=>{
   const deleteID = parseInt(req.params.id)
   let index = tasks.findIndex(task => task.id === deleteID)
   if(index !== -1){
    tasks.splice(index,1)
    res.json(tasks[index])
   }else{
    res.status('404').json({error: "Task Not Found"})
   }
};