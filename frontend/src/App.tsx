/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import HomePage from "./pages/home/page";
import SignUpPage from "./pages/signup/page";
import SettingPage from "./pages/setting/page";
import ProfilePage from "./pages/profile/page";
import LoginPage from "./pages/login/page";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { useThemeStore } from "./store/useThemeStore";




function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore()
  const { theme } = useThemeStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    )
  }

  return (
    <div data-theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={authUser ? <SettingPage /> : <Navigate to="/login" />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

      <Toaster />
    </div>

  );
}

export default App;
