import React from "react";

const Home = () => {
  return (
    <main className='p-3 max-w-4xl mx-auto flex flex-col sm:flex-row gap-4'>
      <div className='flex flex-col flex-1'>
        <h1 className='text-green-700  mx-auto my-3'>E-Todo List</h1>
        <input
          className='border p-3 rounded-lg'
          type='text'
          placeholder='Enter a todo...'
        />
        <button className='bg-slate-700 hover:opacity-95 text-white rounded-lg border border-slate-500 my-7 p-2 uppercase'>
          Add
        </button>
      </div>
      <div className='flex flex-col flex-1'>
        <h2>Hello world</h2>
        <h2>Hello world</h2>
        <h2>Hello world</h2>
        <h2>Hello world</h2>
        <h2>Hello world</h2>
        <h2>Hello world</h2>
        <h2>Hello world</h2>
        <h2>Hello world</h2>
      </div>
    </main>
  );
};

export default Home;
