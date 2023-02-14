import './Sidebar.css'
import {Link} from 'react-router-dom'

function Sidebar() {
    return (
        <div className="sidebar">
            <h1 className="sidebar-title ti">Fibonacci Deck</h1>
            <h2 className="sidebar-option zh"><Link to="/    " style={{ textDecoration: 'none', color: "#000000" }}>今日練習</Link></h2>
            <h2 className="sidebar-option zh"><Link to="/list" style={{ textDecoration: 'none', color: "#000000" }}>單字列表</Link></h2>
        </div>
    );
}
  
export default Sidebar;