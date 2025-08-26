import { Sidebar } from "../../components/SideBar";
import { Outlet } from "react-router-dom";
import { IoPersonAddOutline } from "react-icons/io5";
export default function Chat() {
  return (
    <div className="flex h-full text-black">
      <div className="flex px-7 pt-7 w-[390px] bg-white  justify-between border-r border-gray-200">
        <h3 className="text-xl font-medium">Messages</h3>
        <div className="text-primary">
          <IoPersonAddOutline size={24} />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
