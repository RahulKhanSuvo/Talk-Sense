import { NavLink, Outlet } from "react-router-dom";
import logo from "/faviconV2.png";
import { MdOutlineNightlight } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { RiContactsBook3Line } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
export default function ChatLayout() {
  return (
    <div className="flex h-screen text-black">
      {/* sidebar */}
      <aside className="w-20 flex flex-col items-center justify-between p-4">
        <img className="size-6" src={logo} alt="logo" />
        <nav>
          <ul className="flex flex-col items-center gap-4">
            <li>
              <NavLink className={"text-[23px]"} to="/profile">
                <AiOutlineUser />
              </NavLink>
            </li>
            <li>
              <NavLink className={"text-[23px]"} to="/chats">
                <IoChatboxEllipsesOutline />
              </NavLink>
            </li>
            <li>
              <NavLink className={"text-[23px]"} to="/calls">
                <BiPhoneCall />
              </NavLink>
            </li>
            <li>
              <NavLink className={"text-[23px]"} to="/contact">
                <RiContactsBook3Line />
              </NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <MdOutlineNightlight size={28} />
        </div>
      </aside>
      {/* main content */}
      <main className="flex-1 px-4">
        <Outlet />
      </main>
    </div>
  );
}
