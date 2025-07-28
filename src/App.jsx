import { useEffect, useState } from "react"
import {supabase} from './supabaseClient'
import Form from "./Form"
import TodoList from "./TodoList"
import './app.css'

function App() {

  const [todoItem, setTodoItem] = useState([]) 

  useEffect(() => {
    fetchData()
  }, [])

  const addTodo = async (task) => {
    const {__, error} = await supabase
    .from('to-do')
    .insert([
      {
        task : task,
        completed : false
      }
    ])
    .select()
    if (error) {
      console.log(error)
    }
    else {
      console.log('Berhasil Menambahkan Task !')
      fetchData()
    }
  }

  const handleDelete = async (id) => {
    const response = await supabase
    .from('to-do')
    .delete()
    .eq('id', id)
    if (response.error) {
      console.log(response.error.message);
      
    } else {
      console.log('Berhasil Menghapus Task !')
      fetchData()
    }
  }

  const handleToggle = async (id, currentValue) => {
    const {error} = await supabase
    .from('to-do')
    .update({completed : !currentValue})
    .eq('id', id)
    if (error) {
      console.log(error.message)
    } else {
      fetchData()      
    }
  }

  const handleUpdate = async (id, task) => {
    const {error} = await supabase
    .from('to-do')
    .update({task : task})
    .eq('id', id)
    if (error) {
      console.log(error.message);
    } else {
      console.log('data berhasil di edit !');
      
      fetchData()
    }
  }

  const fetchData = async () => {
    const {data, error} = await supabase
    .from('to-do')
    .select("*")
    .order('id', {ascending : true})

    if (error) {
      console.log(error);
    } else {

      setTodoItem(data)
      console.log('test test')
    }

  } 
  
  
  return(
    <div className=" flex justify-center items-center h-screen">
      <div className="wrapper bg-secondary w-full max-w-[450px] min-h-1/2 text-white px-8 py-4">
        <h1 className="text-center font-chewy text-4xl my-4">Get Things Done !</h1>
        <Form addTodo={addTodo}  />
        <TodoList todoItem={todoItem} handleDelete={handleDelete} handleToggle={handleToggle} handleUpdate={handleUpdate}/>
      </div>
    </div>
  )
}

export default App
