import React from 'react'
import Navbar from '../components/Navbar'
import { useState ,useEffect} from 'react'
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

const Notepage = () => {

const [title, settitle] = useState("")

const [loading, setloading] = useState(false)
const [content, setcontent] = useState("")

const navigate = useNavigate()
const { id } = useParams()

const fetchDetail = async () =>{
  try {
    setloading(true)
  const res = await axios.get(`http://localhost:5001/api/notes/${id}`)

  settitle(res.data.title)
  setcontent(res.data.content)
} catch (error) {
  console.log(error)
}
finally{
  setloading(false)
}
}

useEffect( () =>{

fetchDetail()
}, [])





const handleupdate = async (e)=>{
  e.preventDefault()

  if(!title.trim() || !content.trim())
  {
    toast.error('Please fill out all fields!',{style:{fontFamily:'monospace'}})
  }
else{
  try {
    
    await axios.put(`http://localhost:5001/api/notes/${id}`,{
      title:`${title}`,
      content:`${content}`,
    })

  } catch (error) {
    console.log("error",error)
  }
  finally{
    toast.success('Note updated successfully!',{style:{fontFamily:'monospace'}})
    navigate('/')
  }
}

}

  return (
<div>
{!loading ? (
    <div className='min-h-[500px] h-screen bg-[#e1dede] flex justify-center font-mono'>
      <div className='w-[40vw] m1-sm:w-[80vw] h-[420px]  mt-[50px] rounded-[15px] bg-white shadow-lg'>
        
        <div className=' rounded-[15px] h-[100px] text-[30px] p-[20px] pt-[40px] font-mono'>Update a Note</div>
        <div className='h-[300px] p-[20px]'>
        <div className='text-gray-400 text-[15px] '>Title:</div>
        <div> <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className='rounded-[15px] border-[1px] border-gray-400 w-[37vw] m1-sm:w-[70vw] p-[3px]'/></div>
        <div className='text-gray-400 text-[15px] mt-[20px]'>Content:</div>
        <div> <textarea value={content} type="text" onChange={(e)=>{setcontent(e.target.value)}} placeholder="Type here..." className='w-[37vw] m1-sm:w-[70vw] resize-none rounded-[15px] border-[1px] border-gray-400 text-[15px] p-[3px] h-[100px]'/></div>
<div className='h-[50px] mt-[15px] flex justify-around'>
  <button onClick={()=>{navigate('/')}} className='bg-black text-white rounded-[15px] w-[90px] h-[30px] text-[14px]'>&lt; Go back</button>
  <button onClick={handleupdate} className='bg-black text-white rounded-[15px] w-[90px] h-[30px] text-[15px]'>Save</button>
</div>
        </div>
        
      </div>
    </div>):(<div className='w-screen h-screen flex justify-center bg-[#e1dede] items-center'>

<div role="status" className='mb-[100px]'>
    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-white fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>

    </div>)}

    </div>
  )
}

export default Notepage

