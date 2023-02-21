import '../pages/Today.css'
import {useState} from 'react'
import Card from './Card'
import {ReactComponent as CardBackIcon} from '../img/card_back.svg'
import {ReactComponent as CardFrontIcon} from '../img/card_front.svg'

function CardColumn(props) {

    const [flipList, setFlipList] = useState(Array(props.numOfCards).fill(true))

    const coverAll = () => {
        setFlipList(Array(props.numOfCards).fill(false))
    }

    const revealAll = () => {
        setFlipList(Array(props.numOfCards).fill(true))
    }

    const flipOne = (index) => {
        const newFlipList = [...flipList] // study this syntax later
        newFlipList[index] = !newFlipList[index]
        setFlipList(newFlipList)
    }

    // const cardData = {
    //     "data" : ["救う", "拯救", "すくう", "0", "信仰に救われた"],
    //     "tags" : ["他動詞", "一類動詞"]
    // }

    let cardListIndex = [...Array(props.numOfCards).keys()]
    let cardList = cardListIndex.map((i) => <Card flip={flipList[i]} func={flipOne} index={i} key={i} layout={props.layout} settings={props.settings} content={props.cardData[i]}/>)

    return (
        <div className="card-column">
            <div style={{display: "flex", marginBottom:"30px"}}>
                
                <button className="switch-button" onClick={coverAll } style={{borderRadius:"15px 0 0 15px"}}> 
                    <CardBackIcon  style={{width:"32px", transform:"translateX(6%)"}}/>
                    <span className="switch-button-text zh-bold" style={{left: "213.5%"}}>全部覆蓋</span>
                </button>

                <button className="switch-button" onClick={revealAll} style={{borderRadius:"0 15px 15px 0", marginLeft:"0"}}> 
                    <CardFrontIcon style={{width:"32px", transform:"translateX(-6%)"}}/>
                    <span className="switch-button-text zh-bold">全部翻開</span>
                </button>

                {props.extraButton}

            </div>

            <div className={`card-tmp ${props.extraCardShown === 1 ? 'shown' : ''}${props.extraCardShown === 2 ? 'full-shown' : ''}`}>
            </div>

            {cardList}
        </div>
    );
}
  
export default CardColumn;