




export default function Task({taskTitle,taskDescription,date,index,tasks,setTasks}){
    
    
    const deleteTask=(index2)=>{
        console.info(index2);
        setTasks(tasks.filter((value,index,array)=>{
            return index2!==index
        }));
    }


    return(
        <>
              
        </>
    )
}