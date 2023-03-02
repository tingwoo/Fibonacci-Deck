import '../Side.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

function Sidebar() {
    const routeNameURL = ['', 'list', 'edit', 'settings', 'help']
    const routeNameZh = ['每日練習', '所有卡片', '設計卡片', '設定', '說明']
    const routeNameEn = ['To Be Reviewed', 'All Cards', 'Edit Layout', 'Settings', 'Help']

    const optionHeight = 60
    const optionOverlap = 15

    const [currentPage, setCurrentPage] = useState(document.URL)

    const navigate = useNavigate();
    const handleOnClick = routeNameURL.map((v) => function(){
        navigate('/'+v);
        setCurrentPage(document.URL);
    })

    const compareURL = (str) => {
        return ('http://localhost:3000/' + str === currentPage ? <div className="indicator"></div> : null)
    }

    let optionListIndex = [...Array(routeNameURL.length).keys()]
    let optionList = optionListIndex.map((i) => 
    <div 
        className={`sidebar-option zh-regular`}
        style={{bottom:`${optionOverlap + i * optionOverlap}px`, height:optionHeight+optionOverlap}}
        onClick={handleOnClick[i]}
        key={i}
    >
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", color: "var(--text-0)"}}>
            {routeNameZh[i]}
            {compareURL(routeNameURL[i])}
        </div>
    </div>)

    return (
        <div className='sidebar' style={{height:`${110 + optionHeight * routeNameURL.length}px`}}>
            <div className="sidebar-title ti" style={{boxShadow:"none"}}>
                Fibonacci Deck
            </div>
            
            {optionList}
        </div>
    );
}
  
export default Sidebar;