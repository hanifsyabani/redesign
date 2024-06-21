import { FaSearch } from "react-icons/fa";

export default function Search(){
  return(
    <div className="relative mt-10  ">
      <FaSearch size={25} className="text-gray-500 absolute top-2 left-3 "/>
      <input type="search" placeholder="Search here..." className="border border-gray-500 rounded-full w-full py-2 px-3 pl-12 bg-secondary placeholder:text-gray-500 outline-none "/>
    </div>
  )
}