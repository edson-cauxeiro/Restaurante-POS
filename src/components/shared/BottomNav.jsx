import { use } from "react";
import { BiSolidDish } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { useNavigate } from "react-router-dom";


export default function BottomNav() {

  const navigate = useNavigate()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around">
      <button onClick={() => navigate('/')} className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]">
        <FaHome className="inline mr-2" size={20}/><p>Home</p>
      </button>
       <button onClick={() => navigate('/orders')} className="flex items-center justify-center ml-[-60px] text-[#ababab]">
        <MdOutlineReorder className="inline mr-2" size={20}/> <p>Orders</p>
      </button>
      <button onClick={() => navigate('/tables')} className="flex items-center justify-center text-[#ababab]">
        <MdTableBar className="inline mr-2" size={20}/> <p>Tables</p>
      </button>
      <button className="flex items-center justify-center text-[#ababab]">
        <CiCircleMore className="inline mr-2" size={20}/> <p>More</p>
      </button>

     
      <button className="absolute bottom-6 ml-[60px] bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 items-center">
        <BiSolidDish size={30}/>
      </button>
    </div>
  )
}
