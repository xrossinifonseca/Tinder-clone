import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import Chats from "./components/Chats";
import ChatScreen from "./components/chats/ChatScreen";
function App() {
  return (
    <div>
      <Router>
        {/* <Header backButton="/" /> */}
        <Routes>
          <Route path="/" element={<TinderCards />}></Route>
          <Route path="/chat" element={<Chats />}></Route>
          <Route path="/chat/:person" element={<ChatScreen />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
