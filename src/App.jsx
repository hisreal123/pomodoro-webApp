// import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./views/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { themeContext } from "./features/themeContext";
import { modalContext } from "./features/modalContext";
import { useState } from "react";
import Welcome from "./views/Welcome";



function App() {

  // themes
  const [theme, setTheme] = useState("#0b5c53")
  const [pomodoro, setPomodoro] = useState("25:00")
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


  const allModalStates = {
    showTaskModal,
    setShowTaskModal
  }


  return (
    <>
      <BrowserRouter>
        <themeContext.Provider value={allTaskStates}>
          <modalContext.Provider value={allModalStates}>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/app" element={<Home />} />
            </Routes>
          </modalContext.Provider>
        </themeContext.Provider>
      </BrowserRouter >
    </>
  )
}

export default App
