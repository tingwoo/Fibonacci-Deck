import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Today from './pages/Today'
import List from './pages/List'
import NotFound from './pages/NotFound'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <Sidebar />
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
