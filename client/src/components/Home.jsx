import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import Todos from "./Todos";

const Home = () => {
  const [todos, setTodos] = useState([])
  const [formData, setFormData] = useState({
    title: "",
    completed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/todo/create", {
        title: formData.title,
        completed: formData.completed
      })
      .then((response) => {
        // const msg = response.data
        toast.success('Todo created successfully!');
        clearInput()
              
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const getTodos = async (e)=>{
  //   await axios.get('/api/todo/get').then((res)=>{
  //     setTodos(res.data)
  //   }).catch((err)=>{
  //     console.log(err)
  //   })
  // }
 useEffect(()=>{
  const getTodos = async () =>{   
       await fetch('/api/todo/get').then((data)=>{
        return data.json()
       }).then((res)=>{
        setTodos(res)
      })
      
    

  }
  getTodos()
  
 },[todos])
// console.log(todos)
  // const clearInput = ()=>{
  //   const {title, completed} = formData
  //   title: '';
  //   completed: false
  // }

  return (
    <main className='p-3 max-w-4xl mx-auto flex flex-col sm:flex-row gap-4'>
      
      <form onSubmit={handleSubmit} className='flex flex-col flex-1'>
        <h1 className='text-green-700  mx-auto my-3'>E-Todo List</h1>
        <input
          className='border p-3 rounded-lg'
          type='text'
          placeholder='Enter a todo...'
          value={formData.title}
          name='title'
          onChange={handleChange}
        />
        <div className='flex items-cente gap-2 mt-2'>
          <h3>complete</h3>
          <input
            type='checkbox'
            name='completed'
            onChange={handleChange}
            checked={formData.completed}
            className='text-4xl'
          />
        </div>
        <button className='bg-slate-700 hover:opacity-95 text-white rounded-lg border border-slate-500 my-7 p-2 uppercase'>
          Add
        </button>
      </form>
      <div className='flex flex-col flex-1 mb-4'>
        <h2 className='mx-auto my-7 text-green-700'>TODOS</h2>
       { todos.map((todo)=>(
          <Todos todo={todo} setTodos={setTodos}/>
        ))}        
      </div>
    </main>
  );
};

export default Home;
