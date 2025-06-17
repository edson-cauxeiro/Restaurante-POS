import { FaBell, FaSearch, FaUserCircle, FaUtensils } from "react-icons/fa";


export default function Header() {
  return (
    <header className='flex justify-between items-center py-4 px-8 bg-[#1a1a1a]'>
      {/* Logo Section */}
      <div className='flex items-center gap-2 cursor-pointer'>
        <FaUtensils className='text-[#f5f5f5] h-6 w-6' />
        {/* <img src={logo} alt="POS restaurant logo" className='h-8 w-8' /> */}
        <h1 className='text-lg font-semibold text-[#f5f5f5]'>POS Rest</h1>
      </div>

      {/* Search Section */}
      <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 w-[500px]">
        <FaSearch className="text-[#f5f5f5]" />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none bg-[#1f1f1f] text-[#f5f5f5]"
        />  
      </div>  

      {/* User Section */}
      <div className="flex items-center gap-4">
        <div className="bg-[1f1f1f] rounded-[15px] p-3 cursor-pointer">
          <FaBell className='text-[#f5f5f5] text-2xl' />
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className='text-[#f5f5f5] text-3xl' />
          <div className="flex flex-col items-start">
            <h1 className="text-md text-[#f5f5f5] font-semibold">Edson Cauxeiro</h1>
            <p className="text-xs text-[#ababab] font-medium">Admin</p>
          </div>
        </div>
      </div>

    </header>
  )
}
