import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Createpage = () => {

const [title, settitle] = useState("")
const [content, setcontent] = useState("")
const navigate = useNavigate()

const handlesubmit = async (e)=>{
  e.preventDefault()

  if(!title.trim() || !content.trim())
  {
    toast.error('Please fill out all fields!',{style:{fontFamily:'monospace'}})
  }
else{
  try {
    
    await axios.post("http://localhost:5001/api/notes/",{
      title:`${title}`,
      content:`${content}`,
    })

  } catch (error) {
    console.log("error",error)
  }
  finally{
    toast.success('Note added successfully!',{style:{fontFamily:'monospace'}})
    navigate('/')
  }
}

}

  return (
    <div className='h-screen bg-[#e1dede] flex justify-center font-mono'>
      <div className='w-[40vw] m1-sm:w-[80vw] h-[420px]  mt-[50px] rounded-[15px] bg-white shadow-lg'>
        
        <div className=' rounded-[15px] h-[100px] text-[30px] p-[20px] pt-[40px] font-mono'>Create a Note</div>
        <div className='h-[300px] p-[20px] '>
        <div className='text-gray-400 text-[15px] m1-sm:mt-[14px]'>Title:</div>
        <div> <input type="text" onChange={(e)=>{settitle(e.target.value)}} className='rounded-[15px] border-[1px] border-gray-400 w-[37vw] m1-sm:w-[70vw] p-[3px]'/></div>
        <div className='text-gray-400 text-[15px] mt-[20px]'>Content:</div>
        <div> <textarea type="text" onChange={(e)=>{setcontent(e.target.value)}} placeholder="Type here..." className='w-[37vw] m1-sm:w-[70vw] resize-none rounded-[15px] border-[1px] border-gray-400 text-[15px] p-[3px] h-[100px]'/></div>
<div className='h-[50px] mt-[15px] flex justify-around'>
  <button onClick={()=>{navigate('/')}} className='bg-black text-white rounded-[15px] w-[90px] h-[30px] text-[14px]'>&lt; Go back</button>
  <button onClick={handlesubmit} className='bg-black text-white rounded-[15px] w-[90px] h-[30px] text-[15px]'>Create</button>
</div>
        </div>
        
      </div>
    </div>
  )
}

export default Createpage
