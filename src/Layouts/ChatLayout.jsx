import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineNightlight } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { RiContactsBook3Line } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
import { TbLogout2 } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";

export default function ChatLayout() {
  const { user, handelLogout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogoutClick = async () => {
    await handelLogout();
    setShowProfileMenu(false);
  };

  return (
    <div className="flex h-screen text-white">
      {/* Sidebar */}
      <aside className="w-20 flex bg-white flex-col items-center justify-between p-4 border-r border-gray-200">
        <div className="pb-4 space-y-1.5 text-gray-500">
          <nav>
            <ul className="flex flex-col items-center gap-4">
              <li>
                <NavLink
                  to="/chats"
                  className={({ isActive }) =>
                    `p-2 rounded-md flex items-center justify-center text-[28px] transition-colors duration-200 ${
                      isActive ? "bg-[#33C1A0] text-white" : "text-gray-500"
                    }`
                  }
                >
                  <IoChatboxEllipsesOutline />
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    `p-2 rounded-md flex items-center justify-center text-[28px] transition-colors duration-200 ${
                      isActive ? "bg-[#33C1A0] text-white" : "text-gray-500"
                    }`
                  }
                  to="/calls"
                >
                  <BiPhoneCall />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `p-2 rounded-md flex items-center justify-center text-[28px] transition-colors duration-200 ${
                      isActive ? "bg-[#33C1A0] text-white" : "text-gray-500"
                    }`
                  }
                  to="/contact"
                >
                  <RiContactsBook3Line />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="text-[28px] flex flex-col items-center gap-7 relative">
          <MdOutlineNightlight size={28} />

          {/* Profile picture button */}
          {user?.photoURL && (
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="mt-2 cursor-pointer focus:outline-none"
            >
              <img
                src={user.photoURL}
                alt={user.displayName || "Profile"}
                className="w-10 h-10 rounded-full"
              />
            </button>
          )}
          {/* Profile popup menu */}
          {showProfileMenu && (
            <div
              ref={menuRef}
              className="absolute bottom-12 transform translate-x-[35%] w-[200px] bg-white text-[#495057] font-normal rounded-lg shadow-[0_2px_4px_rgba(15,34,58,0.12)] z-50 flex flex-col py-2 text-[16px] border-gray-50 border "
            >
              <NavLink
                to="/profile"
                className="px-5 py-2 hover:bg-gray-100 transition-colors flex duration-300 items-center gap-2 justify-between"
                onClick={() => setShowProfileMenu(false)}
              >
                Profile
                <AiOutlineUser className="text-gray-400" size={18} />
              </NavLink>

              <NavLink
                to="/settings"
                className="px-4 py-2 hover:bg-gray-100 bg-gray-50 flex items-center gap-2 justify-between"
                onClick={() => setShowProfileMenu(false)}
              >
                Settings
                <AiOutlineSetting size={18} />
              </NavLink>

              <button
                onClick={handleLogoutClick}
                className="px-4 py-2  hover:bg-gray-100 flex items-center gap-2 justify-between"
              >
                Logout
                <TbLogout2 size={18} />
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
