import React from 'react'
import { Link } from 'react-router-dom'
import {PlusIcon} from "lucide-react"
const Navbar = () => {
  return (
    <div>
      <div className='h-[60px] w-full bg-[#171616] p-[10px] pl-[30px] flex'>
        <div className='text-[25px] font-mono font-bold w-1/2 text-white'>MERN-BOARD</div>
        <div className=' w-1/2 flex justify-end p-[10px] pr-[30px] items-center'>
            <Link to={"/create"}>
            <button className='bg-black font-mono text-white text-[15px] rounded-[12px] w-[100px] h-[30px] border border-white bottom-1'>+ Add Note</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
