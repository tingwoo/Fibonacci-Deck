import './Today.css'
import CardColumn from '../components/CardColumn'
import {useState} from 'react'
import {ReactComponent as PlusIcon} from '../img/plus.svg'

function Today() {
    // layout: [6] -> show tag, [7] -> show level
    const [userData, setUserData] = useState(require("../user/testUserData.json"))
    const [extraCardShown, setExtraCardShown] = useState(0)

    const tmp1 = () => {
        if(extraCardShown !== 2){
            setExtraCardShown(1)
        }
    }

    const tmp2 = () => {
        if(extraCardShown !== 2){
            setExtraCardShown(0)
        }
    }

    const tmp3 = () => {
        setExtraCardShown(2)
        document.getElementById("clearInput").click()
        document.getElementById("clearTag").click()
        document.getElementById("block").style.visibility = "visible"
        document.getElementById("block").style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        document.getElementById("new-card-pop-up").style.transform = "translateX(-50%) translateY(50%)"
        document.getElementById("new-card-pop-up").style.bottom = "50%"
        document.getElementById("newCardInput0").focus()
        
    }
    
    const plusButton =  <button className="plus-button" onMouseEnter={tmp1} onMouseLeave={tmp2} onClick={tmp3}>
                            <PlusIcon style={{width:"32px"}}/>
                            <span className="plus-button-text zh-bold">新增卡片</span>
                        </button>

    return (
        <div className="card-columns">
            <CardColumn numOfCards={userData.cards.length} layout={userData.leftCardLayout} settings={userData.settings} cardData={userData.cards} extraButton={null} extraCardShown={extraCardShown}/>
            <CardColumn numOfCards={userData.cards.length} layout={userData.rightCardLayout} settings={userData.settings} cardData={userData.cards} extraButton={plusButton} extraCardShown={extraCardShown}/>
        </div>
    );
}
  
export default Today;