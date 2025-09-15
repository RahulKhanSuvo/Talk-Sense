import { NavLink, Outlet } from "react-router-dom";
import logo from "/logo.png";
import { MdOutlineNightlight } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { IoChatboxEllipsesOutline, IoSettingsOutline } from "react-icons/io5";
import { RiContactsBook3Line } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
import { TbLogout2 } from "react-icons/tb";
import { useAuth } from "../hooks/useAuth";
export default function ChatLayout() {
  const { user, handelLogout } = useAuth();
  console.log(user);
  return (
    <div className="flex h-screen text-white">
      {/* sidebar */}
      <aside className="w-24 flex bg-primary flex-col items-center justify-between p-4">
        <div className="border-b-2 border-white pb-4">
          <img className="w-20" src={logo} alt="logo" />
        </div>
        <nav>
          <ul className="flex flex-col items-center gap-4">
            <li>
              <NavLink className={"text-[28px]"} to="/profile">
                <AiOutlineUser />
              </NavLink>
            </li>
            <li>
              <NavLink className={"text-[28px]"} to="/chats">
                <IoChatboxEllipsesOutline />
              </NavLink>
            </li>
            <li>
              <NavLink className={"text-[28px]"} to="/calls">
                <BiPhoneCall />
              </NavLink>
            </li>
            <li>
              <NavLink className={"text-[28px]"} to="/contact">
                <RiContactsBook3Line />
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="text-[28px] flex flex-col items-center gap-7">
          <MdOutlineNightlight size={28} />

          <IoSettingsOutline size={28} />
          <button onClick={handelLogout} className="text-[28px]">
            <TbLogout2 />
          </button>
          {/* profile */}
        </div>
      </aside>
      {/* main content */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
