import React from "react"
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from "./components/signup"
import { Signin } from "./components/signin"
import { Dashboard } from "./components/dashboard"
import { SendMoney } from "./components/sendMoney"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/send" element={<SendMoney />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
