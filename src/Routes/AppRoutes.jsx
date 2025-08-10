import { Route, Routes } from "react-router-dom";
import ChatLayout from "../Layouts/ChatLayout";
import { Profile } from "../pages/chat/Profile";
import { NotFound } from "../pages/NotFound";
import Chat from "../pages/chat/Chat";
import Contacts from "../pages/chat/Contacts";
import Calls from "../pages/chat/Calls";
import Settings from "../pages/chat/Settings";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/auth/Login";

function AppRoutes() {
  return (
    <>
      <Routes>
        {/* Auth Layout Routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
        {/* Chat Layout Routes */}
        <Route path="/" element={<ChatLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="chats" element={<Chat />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="calls" element={<Calls />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Catch-all route for NotFound */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
