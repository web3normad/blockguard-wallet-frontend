import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import SeedPhrase from "./pages/SeedPhrase";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Settings from "./pages/Settings";
import Transactions from "./pages/Transactions";
import Navbar from "./components/Navbar";
import ConfirmPhrase from "./pages/ConfirmPhrase";

function App() {

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
    <div className="bg-primary-950 w-[350px] h-[600px] overflow-hidden">
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* <Route path="/wallet" element={<Wallet />} /> */}
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/ConfirmPhrase" element={<ConfirmPhrase />} />
          <Route path="/seed-phrase" element={<SeedPhrase />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
        <Navbar />
    </div>
  </Router>
  
  );
}

export default App;
