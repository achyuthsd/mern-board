import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Trash2,Pencil } from 'lucide-react';
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import api from "../lib/axios.js"

const Homepage = () => {
  const [notes, setnotes] = useState([]);
  const [loading, setloading] = useState(true);
const navigate = useNavigate()
  const fetchNotes = async () => {
    try {
      setloading(true);
      const res = await api.get("/notes");
      console.table(res.data);
      setnotes(res.data);
    } catch (error) {
      console.log("error",error);
    } finally {
      setloading(false);
    }
  };

const handledelete = async (e,id) =>{
e.preventDefault() //prevent navigation when clicking the whole div

if(!window.confirm('Do you want to delete this note?')){return}

try {
  await api.delete(`/notes/${id}`)
  toast.success('Deleted successfully!',{style:{fontFamily:'monospace'}})
  navigate(0)
} catch (error) {
  console.log('error',error)
}


}

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <Navbar />
      {
      loading && (
        

        <div className="h-[90vh] bg-[#e1dede] flex justify-center items-center ">
          <div className="mb-[200px]">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-[60px] h-[60px] text-gray-200 animate-spin dark:text-white-600 fill-black"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      )}
      <div className="bg-[#e1dede] min-h-[90vh] flex justify-center items-center">
        {notes.length > 0 ? (
          <div className="grid grid-cols-3 m-sm:grid-cols-2 m1-sm:grid-cols-1 gap-[25px] gap-x-[20px]  p-[40px] font-mono place-items-center">
            {notes.map((item) => (
              <Link to={`/details/${item._id}`}>
                <div
                  key={item.id}
                  className=" w-[300px] block h-[150px] rounded-[10px] bg-white border-b-4 border-black"
                >
                  <div className=" p-[20px] rounded-tl-[10px] rounded-tr-[10px] text-[22px] truncate ">
                    {item.title}
                  </div>
                  <div className="pl-[20px] pr-[20px] h-[50px] text-gray-500 truncate text-[13px]">{item.content}</div>
                  <div className="text-[11px] pl-[20px] flex">
                    <div className="w-1/2">
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>

                    <div className="flex justify-end pr-[20px]  w-1/2 gap-[5px]">
                      <Trash2 className="w-[16px] h-[16px] hover:text-red-600" onClick={(e)=>{handledelete(e,item._id)}}/>
                      <Pencil className="w-[16px] h-[16px] hover:text-blue-600"/>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ):(
          <div className="text-gray-500 font-mono mb-[150px]">Click <span className="text-gray-800 font-bold">"+Add Note"</span> to Get Started</div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Homepage;
