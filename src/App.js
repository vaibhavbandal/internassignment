import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';
import { useState } from 'react';
// import Task from './Task';
import Grid from '@mui/material/Grid';



export default function App(){


    const [tasks,setTasks]=useState([]); // All Tasks
    const [task,setTask]=useState({taskTitle:'',taskDescription:''}); // Single or Active Task
    const [date,setDate]=useState(null);
    

    const handleOnChange=(event)=>{
        setTask((pre)=>{
            return {...pre,[event.target.name]:event.target.value}
        })
        
    }

  
    
    const submitTask=(e)=>{
        e.preventDefault();
        
        if(task.taskTitle===''||task.taskDescription===''||date===null){
            alert("Enter Task Details!"); return 0; 
        }

        setTasks((pre)=>{
            return [...pre,task]
        }) 

        // Clearing Empty Fields
        setTask({taskTitle:'',taskDescription:''});
        setDate(null);
        alert('Successfully Inserted Task');
    }

   const deleteTask=(index)=>{
        console.info(`deleted index= ${index}`);
        setTasks(tasks.filter((task,index2)=>{
            return index!==index2
        }))
   }




    return(<>
        <Container  sx={{
            backgroundColor:'#E8F3FE',
            minHeight:'100vh'
        }} maxWidth="xl">

    <Box paddingTop={3}>


        <Card sx={{
            maxWidth:'600px',
            minHeight:'400px',
            marginX:'auto',
            borderRadius:'10px',
        }} elevation={12}>


<form>

<Box
      sx={{
          
    }}
    >
            <Typography pt={4} gutterBottom sx={{
                color:'#003979',
                fontWeight:'bold',
                textAlign:'center'
                
            }} variant="h5" component="h2">
                Task Manager
            </Typography>

                </Box>

         <Box mt={1}> 
             <Container>

              <TextField onChange={handleOnChange} name='taskTitle' value={task.taskTitle}  label="Task Title" variant="outlined"  fullWidth  id="fullWidth" />
             </Container>

         </Box>

            <Box mt={1}>
            <Container>
           <TextField
              id="outlined-multiline-static"
              
              label="Task Description"
              multiline
              fullWidth
              rows={4} 
              onChange={handleOnChange} name='taskDescription'
              value={task.taskDescription}
              />

              </Container>
              </Box>

            <Box mt={1}>

            <Container>

           <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Date"
                name='taskDate'
                value={date}
                onChange={(newDate) => {
                    setDate(newDate);
                }}
                renderInput={(params) => <TextField fullWidth id="fullWidth" {...params} />}
                />
           </LocalizationProvider>
                </Container>

                </Box>
                

                    <Box mt={2} sx={{textAlign:'center'}}>

                    <Container >

                    <Button onClick={submitTask} sx={{
                        backgroundColor:'#003979'
                    }} variant="contained">Create Task</Button>
                    </Container>
                    </Box>

                    </form>

        </Card>
    
{/* --------------------------------------------------------------------- */}

        <Typography pt={4} gutterBottom sx={{
                color:'#003979',
                fontWeight:'bold',
                textAlign:'center'
                
            }} variant="h5" component="h2">
                Your Tasks
            </Typography>

            {
                tasks.map((task,index)=>{
                    return <>
                       <Container maxWidth='lg'>
            <Card sx={{
                maxWidth:'800px',
                margin:'auto',
                minHeight:'50px',
                marginTop:'10px',
                paddingBottom:'10px'
                
            }}>


                <Box sx={{
                    marginTop:'10px'
                }}>


            <Grid container spacing={3}>
      <Grid item xs={8}>
    
        <Typography sx={{ fontSize: 18,marginLeft:'10px' }} color="#003979" gutterBottom>
           {index+1}. {task.taskDescription}
        </Typography>
     </Grid>
    <Grid item xs={2}>
        <Button variant='contained' sx={{backgroundColor:'#003979',color:'white',width:'100px'}}  size="small">Completed</Button>
    </Grid>
        <Grid item xs={2}>
        <Button 
        onClick={()=>{deleteTask(index);}}
        variant='contained' sx={{backgroundColor:'#D60707',color:'white',width:'100px'}}  size="small">Delete</Button>
        </Grid>
    </Grid>

                </Box>
    </Card>
            </Container>
                    </>
                })
            }

           


                    </Box>
      </Container>
    </>)
}