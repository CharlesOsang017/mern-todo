import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  //   const baseURL =
  const [todo, setTodo] = useState("");

  // const handleChange = (e)=>{
  //     setTodo(e.target.value)
  //     // console.log(todo)
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(todo)
    await axios
      .post("/api/todo/create", {todo })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
      const res = await fetch("/api/todo/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todo
        }),
      });
  };

  return (
    <main className='p-3 max-w-4xl mx-auto flex flex-col sm:flex-row gap-4'>
      <form onSubmit={handleSubmit} className='flex flex-col flex-1'>
        <h1 className='text-green-700  mx-auto my-3'>E-Todo List</h1>
        <input
          className='border p-3 rounded-lg'
          type='text'
          placeholder='Enter a todo...'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <div className="flex items-cente gap-2 mt-2">
            <h3>complete</h3>
        <input type="checkbox" name="completed"  className="text-4xl"/>
        </div>
        <button className='bg-slate-700 hover:opacity-95 text-white rounded-lg border border-slate-500 my-7 p-2 uppercase'>
          Add
        </button>
      </form>
      <div className='flex flex-col flex-1'>
        <h2 className='mx-auto my-7 text-green-700'>TODOS</h2>
        <div className='flex justify-between bg-slate-200 p-3 rounded-lg'>
          <h3 className='text-semibold truncate'>
            Iron out the bug in my code
          </h3>
          <div className='flex gap-2 cursor-pointer items-center'>
            <input
              type='checkbox'
              name='completed'
              className='text-2xl cursor-pointer'
            />
            <RiDeleteBin5Line className='text-red-700' />
            <FaRegEdit className='text-green-700' />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
