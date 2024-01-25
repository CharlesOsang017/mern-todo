import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

const Todos = ({todo, setTodos}) => {
    // console.log(todo)
    const handleDelete = async (todoId)=>{
        try {
            const res = await fetch(`/api/todo/delete/${todoId}`, {method: "DELETE"})
            const data = await res.json()
            setTodos(prev => prev.filter(todo => todo._id !== todoId) )
        } catch (error) {
            
        }
    }
  return (
    <>
     {/* <h2 className='mx-auto my-7 text-green-700'>TODOS</h2> */}
    <div className='flex justify-between bg-slate-200 p-3 rounded-lg my-1'>          
          <h3 className='text-semibold truncate'>
            {todo && todo.title}
          </h3>
          <div className='flex gap-2 cursor-pointer items-center'>
            <input
              checked={todo.completed}
              type='checkbox'
              name='completed'
              className='text-2xl cursor-pointer'
            />
            <RiDeleteBin5Line className='text-red-700'  onClick={()=>handleDelete(todo._id)}/>
            <FaRegEdit className='text-green-700' />
          </div>
        </div>
    </>
  )
}

export default Todos