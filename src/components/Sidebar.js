import './Sidebar.css'
import {Link} from 'react-router-dom'

function Sidebar() {
    const today = new Date();
    const tmp = {textDecoration: 'none', color: "var(--text-0)"}
    
    return (
        <div className="sidebar">
            <h1 className="sidebar-title ti">Fibonacci Deck</h1>
            
            <h1 className="sidebar-title ti" >{today.getMonth()+1}/{today.getDate()}</h1>

            <h2 className="sidebar-option zh-regular"><Link to="/    " style={tmp}>今日練習</Link></h2>
            <h2 className="sidebar-option zh-regular"><Link to="/list" style={tmp}>所有卡片</Link></h2>
            <h2 className="sidebar-option zh-regular"><Link to="/edit" style={tmp}>卡片設定</Link></h2>
            <h2 className="sidebar-option zh-regular"><Link to="/account" style={tmp}>帳戶</Link></h2>
        </div>
    );
}
  
export default Sidebar;