import '../Side.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Sidebar() {
    const [currentPage, setCurrentPage] = useState(document.URL)
    const tmp = {textDecoration: 'none', color: "var(--text-0)"}
    

    const toLink = (i) => {
        document.getElementById(`link${i}`).click()
        setCurrentPage(document.URL)
    }

    const compareURL = (str) => {
        return ('http://localhost:3000/' + str === currentPage ? <div className="indicator"></div> : null)
    }

    const routeNameURL = ['', 'list', 'edit', 'help']
    const routeNameZh = ['今日練習', '所有卡片', '設定', '說明']
    const routeNameEn = ['Today\'s Tasks', 'All Cards', 'Edit Layout', 'Help']

    let optionListIndex = [...Array(4).keys()]
    let optionList = optionListIndex.map((i) => 
    <div className={`sidebar-option zh-regular`} style={{bottom:`${15 + i * 15}px`}} onClick={() => toLink(i)}>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <Link to={`/${routeNameURL[i]}`} style={tmp} id={`link${i}`}>{routeNameZh[i]}</Link>
            {compareURL(routeNameURL[i])}
        </div>
    </div>)

    // console.log(document.URL)
    // console.log("http://localhost:3000")

    return (
        <div className='sidebar'>
            <div className="sidebar-title ti" style={{boxShadow:"none"}}>
                Fibonacci Deck
            </div>
            
            {optionList}
        </div>
    );
}
  
export default Sidebar;