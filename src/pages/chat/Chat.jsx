import { Sidebar } from "../../components/SideBar";
import { Outlet } from "react-router-dom";
import { IoPersonAddOutline } from "react-icons/io5";
export default function Chat() {
  return (
    <div className="flex h-full">
      <Sidebar icon={<IoPersonAddOutline size={20} />} name="Chats"></Sidebar>
      <Outlet />
    </div>
  );
}
