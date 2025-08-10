import { Route, Routes } from "react-router-dom";
import ChatLayout from "../Layouts/ChatLayout";
import { Profile } from "../pages/chat/Profile";
import { NotFound } from "../pages/NotFound";
import Chat from "../pages/chat/Chat";
import Contacts from "../pages/chat/Contacts";
import Calls from "../pages/chat/Calls";
import Settings from "../pages/chat/Settings";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ChatLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="chat" element={<Chat />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="calls" element={<Calls />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
