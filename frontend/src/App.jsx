import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  );
};

export default App;
