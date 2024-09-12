import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react"; 
import Home from "./pages/Home/Home";
import Welcome from "./pages/Welcome";
import SeedPhrase from "./pages/SeedPhrase";
import Settings from "./pages/Settings";
import Transactions from "./pages/Transactions";
import ConfirmPhrase from "./pages/ConfirmPhrase";
import Navbar from "./components/Navbar/Navbar";
import Exchange from "./pages/Exchange";
import Statistics from "./pages/Statistics";
import Header from "./components/Header";
import Send from "./pages/Home/Send";
import Receive from "./pages/Home/Receive";
import SerectRecovery from "./pages/SerectRecovery";
import SerectRecovery from "./pages/SerectRecoveryHidden";
import RecoveryGuess from "./pages/RecoveryGuess";

import Login from "./components/Login/Login";
import SignUp from "./pages/SignUp";
import CreatePassword from "./pages/CreatePassword";


function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  // Function to toggle between dark and light mode
  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.body.classList.toggle("light", !isLightMode); 
  };

  const onclick = async () => {
    let [tab] = await chrome.tabs.query({ active: true });

    if (tab.id !== undefined) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          alert("Welcome to BlockGuard Wallet");
        }
      });
    } else {
      console.error("Failed to get the active tab ID.");
    }
  };

  return (
    <Router>
      <div className={`w-[350px] h-[600px] overflow-hidden ${isLightMode ? "bg-gray-100 text-primary-950" : "bg-primary-950"}` }>
        <Header isLightMode={isLightMode} toggleTheme={toggleTheme} />
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="confirm-phrase" element={<ConfirmPhrase />} />
          <Route path="/send-receive" element={<Home />} />
          <Route path="/send-token" element={<Send />} />
          <Route path="/receive-token" element={<Receive />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create-password" element={<CreatePassword />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/ConfirmPhrase" element={<ConfirmPhrase />} />
          <Route path="/seed-phrase" element={<SeedPhrase />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/SerectRecovery" element={<SerectRecovery />} />
          <Route path="/SerectRecoveryHidden" element={<SerectRecoveryHidden />} />
          <Route path="/RecoveryGuess" element={<RecoveryGuess />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
