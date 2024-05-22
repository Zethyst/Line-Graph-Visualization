import { Link, useLocation } from "react-router-dom";


function Sidebar(props:any) {
    const location=useLocation();
  return (
    <div className="fixed top-0 pr-3 z-100 left-0 w-72 h-[105vh] flex flex-col justify-center items-center rounded-r-3xl bg-[#6B120A]">
      <ul className="flex flex-col gap-2 justify-center w-72 items-center text-white tracking-wider text-sm">
          <Link to='/' onClick={()=>{props.setTitle("Dashboard")}} className={`w-[90%] p-4 rounded-xl  cursor-pointer ${location.pathname==='/'?'bg-[#ef5e5020]':'bg-[#6B120A]'} hover:bg-[#ef5e5020] flex justify-center items-center gap-5`}>
          <span className="material-symbols-outlined">dashboard</span>
          <p className="font-bold ">Dashboard</p>
          </Link>
        <Link to='/chat' onClick={()=>{props.setTitle("Chat With Bot")}} className={`w-[90%] p-4 rounded-xl  cursor-pointer ${location.pathname==='/analytics'?'bg-[#ef5e5020]':'bg-[#6B120A]'} hover:bg-[#ef5e5020] flex justify-center items-center gap-5`}>
        <span className="material-symbols-outlined -translate-x-5">
chat
</span>
          <p className="font-bold -translate-x-4">Chat</p>
        </Link>
        <li className="w-[90%] p-4 rounded-xl bg-[#6B120A] cursor-pointer hover:bg-[#ef5e5020] flex justify-center items-center gap-5">
          <span className="material-symbols-outlined translate-x-2">
            bookmark_manager
          </span>
          <p className="font-bold translate-x-2">Quote</p>
          <i className="fa-solid fa-chevron-down translate-x-12 text-white m-3"></i>
        </li>
        <li className="w-[90%] p-4 rounded-xl bg-[#6B120A] cursor-pointer hover:bg-[#ef5e5020] flex justify-center items-center gap-5">
          <span className="material-symbols-outlined -translate-x-2">account_circle</span>
          <p className="font-bold -translate-x-2">User List</p>
        </li>
        <li className="w-[90%] p-4 rounded-xl bg-[#6B120A] cursor-pointer hover:bg-[#ef5e5020] flex justify-center items-center gap-5">
          <span className="material-symbols-outlined translate-x-4">archive</span>
          <p className="font-bold translate-x-4">Archive</p>
          <i className="fa-solid fa-chevron-down translate-x-11 text-white m-3"></i>
        </li>
        <li className="w-[90%] p-4 rounded-xl bg-[#6B120A] cursor-pointer hover:bg-[#ef5e5020] flex justify-center items-center gap-5">
          <span className="material-symbols-outlined -translate-x-3">history</span>
          <p className="font-bold -translate-x-3">History</p>
        </li>
      </ul>
      <div className="flex gap-1 justify-center items-center translate-y-8 mt-2 pb-4">
        <div className="p-[3px] h-1 w-1  bg-white rounded-full"></div>
        <div className="p-[3px] h-2 w-2 bg-white rounded-full"></div>
        <div className="p-[3px] h-3 w-3  bg-white rounded-full"></div>
        <span className="material-symbols-outlined text-white">
double_arrow
</span>
      </div>
    </div>
  );
}

export default Sidebar;
