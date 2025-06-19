import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";


export default function RecentOrders() {
  return (
    <div className="px-8 mt-4">
      <div className="bg-[#1a1a1a] w-full h-[450px] rounded-lg">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">Recent Orders</h1>
          <a href=""  className="text-[#025cca] text-sm font-semibold">Viw all</a>
        </div>

        {/* Search Button */}
        <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 mx-6">
          <FaSearch className="text-[#f5f5f5]" />
          <input
            type="text"
            placeholder="Search recent orders..."
            className="outline-none bg-[#1f1f1f] text-[#f5f5f5]"
          />  
        </div> 

        {/* Order List */}
        <div className="mt-4 px-6 overflow-scroll h-[300px] scrollbar-hide">
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
        </div>

      </div>
    </div>
  )
}
