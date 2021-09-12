import { useState } from "react";
import './todo.css'


function Todo(){

    const [task, setTask] = useState("");
    const [taskList,setTaskList] = useState([]);

    const handleChange=(e)=>{
        setTask(e.target.value);
    }

    const AddTask = ()=>{
       if(task !== ""){
           const taskDetails = {
               id:Math.floor(Math.random()*1000),
               value: task,
               isCompleted: false,
           }

           setTaskList([...taskList, taskDetails]);
       }
    };

    const deleteTask = (e, id)=>{
        e.preventDefault();
        setTaskList(taskList.filter(t => t.id !== id))
    }

    // console.log("taskList", taskList)
    
    return(
        <div className="main">
            <h1>To-Do</h1>
            <input type="text" name = "text" onChange={(e)=>handleChange(e)} placeholder="Add Task Here" />
            <button onClick={AddTask}>Add</button>
            <br/>

        {taskList !== [] ?

            <div className="taskdiv">
                {taskList.map((t)=>(
                    <div>{t.value}<button onClick={(e)=>deleteTask(e, t.id)}>Delete</button></div>
                ))}
            </div>

    
        : null}

        </div>
    );
}

export default Todo;