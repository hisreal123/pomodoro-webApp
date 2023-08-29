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



function App() {

  // themes
  const [theme, setTheme] = useState("#0b5c53")
  const [pomodoro, setPomodoro] = useState("00:04")
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


  const allModalStates = {
    showTaskModal,
    setShowTaskModal,
    taskForm,
    setTaskForm
  }


  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter >
    </>
  )
}

export default App
