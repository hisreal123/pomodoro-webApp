// import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./views/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { themeContext } from "./features/themeContext";
import { modalContext } from "./features/modalContext";
import { useState } from "react";
import Welcome from "./views/Welcome";
import Login from "./views/Login";
import Signup from "./views/Signup";
import ForgotPassword from "./views/ForgotPassword";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from "react-query";



function App() {

  // themes
  const [theme, setTheme] = useState("#0b5c53")
  const [pomodoro, setPomodoro] = useState("23:00")
  const [shortBreak, setShortBreak] = useState("05:00")
  const [longBreak, setLongBreak] = useState("15:00")


  const allTaskStates = {
    theme,
    setTheme,
    pomodoro,
    setPomodoro,
    shortBreak,
    setShortBreak,
    longBreak,
    setLongBreak
  }


  // Modals
  const [showTaskModal, setShowTaskModal] = useState(false)
  const [taskForm, setTaskForm] = useState(false)
  const [settings, setSettings] = useState(false)


  const allModalStates = {
    showTaskModal,
    setShowTaskModal,
    taskForm,
    setTaskForm,
    settings,
    setSettings
  }

  const queryClient = new QueryClient();

  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <themeContext.Provider value={allTaskStates}>
            <modalContext.Provider value={allModalStates}>
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/app" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot" element={<ForgotPassword />} />
              </Routes>
            </modalContext.Provider>
          </themeContext.Provider>
        </QueryClientProvider>
        <ToastContainer />
      </BrowserRouter >
    </>
  )
}

export default App
