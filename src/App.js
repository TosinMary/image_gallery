import DragIt from "./component/DragIt";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LogIn from "./component/LogIn";
import SignUp from "./component/SignUp";
import Home from "./component/Home";


function App() {
  return (
    <div className="App">
      
      <Router>
                <Routes>
                   <Route path="/" element={<Home />} />
                    <Route path="login" element={<LogIn />} />
                    <Route path='dragIt' element={<DragIt />} />
                    <Route path='signup' element={<SignUp/>} />
                </Routes>
       </Router>
       
    </div>
  );
}

export default App;
