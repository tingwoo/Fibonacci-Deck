import {ReactComponent as CardBackIcon} from '../img/card_back.svg'
import {ReactComponent as CardFrontIcon} from '../img/card_front.svg'

function ButtonsControlAll(props){
    return (
        <div style={{display: "flex", marginBottom:"15px"}}>
            <button className="flip-button" onClick={() => props.coverAll(props.controlsRight) } style={{borderRadius:"15px 0 0 15px"}}> 
                <CardBackIcon  style={{width:"32px", transform:"translateX(6%)"}}/>
                <span className="flip-button-text zh-bold" style={{left: "213.5%"}}>全部覆蓋</span>
            </button>

            <button className="flip-button" onClick={() => props.revealAll(props.controlsRight)} style={{borderRadius:"0 15px 15px 0", marginLeft:"0"}}> 
                <CardFrontIcon style={{width:"32px", transform:"translateX(-6%)"}}/>
                <span className="flip-button-text zh-bold">全部翻開</span>
            </button>

            {props.additionalButton}
        </div>
    )
}

export default ButtonsControlAll;