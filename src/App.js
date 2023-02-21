import './App.css';
import { Routes, Route} from "react-router-dom";
import Today from './pages/Today'
import List from './pages/List'
import NotFound from './pages/NotFound'
import Sidebar from './components/Sidebar'
import NewCardPopUp from './components/NewCardPopUp'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="block" id="block" onClick={() => document.getElementById("cancel").click()}></div>
      <NewCardPopUp />
      <div className="main">
        <Routes>
          <Route path="/" element={<Today />} />
          <Route path="List" element={<List />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
