// import socketIo from "socket.io-client";
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Join from './component/join/Join.js';
import Chat from './component/chat/Chat';

// const ENDPOINT = 'http://localhost:3000/';
// const socket = socketIo(ENDPOINT , {transports :['websocket']});


function App() {
  // socket.on("connect",()=>{

  // })
  
  return (
    <div className="App">
      <Router>
        <Routes>
        
        <Route exact path="/"  element={<Join/>}/>
        <Route exact path="/chat" element={<Chat/>}/>
        </Routes>
      </Router>
      
         </div>
  );
}

export default App;
