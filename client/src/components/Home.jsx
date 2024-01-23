import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

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
        <h2 className='mx-auto my-7 text-green-700'>TODOS</h2>
        <div className='flex justify-between bg-slate-200 p-3 rounded-lg'>
          <h3 className='text-semibold truncate'>
            Iron out the bug in my code
          </h3>
          <div className='flex gap-2 cursor-pointer items-center'>
        <input type="checkbox" name="completed"  className="text-2xl cursor-pointer"/>
          <RiDeleteBin5Line className='text-red-700' />
            <FaRegEdit className='text-green-700'/>
          </div>
        </div>
        
      </div>
    </main>
  );
};

export default Home;
