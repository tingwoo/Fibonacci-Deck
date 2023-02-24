import '../Side.css'
import {Link} from 'react-router-dom'

function Sidebar() {
    const tmp = {textDecoration: 'none', color: "var(--text-0)"}
    
    const toLink = (i) => {
        document.getElementById(`link${i}`).click();
    }

    return (
        <div className='sidebar'>
            <div className="sidebar-title ti" style={{boxShadow:"none"}}>
                Fibonacci Deck
            </div>
            <div className='sidebar-option zh-regular' style={{bottom:"15px"}} onClick={() => toLink(1)}>
                <Link to="/    " style={tmp} id='link1'>今日練習</Link>
            </div>
            <div className='sidebar-option zh-regular' style={{bottom:"30px"}} onClick={() => toLink(2)}>
                <Link to="/list" style={tmp} id='link2'>所有卡片</Link>
            </div>
            <div className='sidebar-option zh-regular' style={{bottom:"45px"}} onClick={() => toLink(3)}>
                <Link to="/edit" style={tmp} id='link3'>設定</Link>
            </div>
            <div className='sidebar-option zh-regular' style={{bottom:"60px"}} onClick={() => toLink(4)}>
                <Link to="/help" style={tmp} id='link4'>說明</Link>
            </div>
        </div>
    );
}
  
export default Sidebar;