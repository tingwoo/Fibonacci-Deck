// import {ReactComponent as CardBackIcon} from '../img/card_back.svg'
// import {ReactComponent as CardFrontIcon} from '../img/card_front.svg'

function SearchBar(props){
    return (
        <div style={{marginBottom:"28.2px", height:"35px"}}>
            <form style={{display: "flex", justifyContent: "space-evenly", width: "300px", height: "100%", margin: "auto"}}>
                <input 
                    className="zh-regular"
                    style={{
                        width: "200px",
                        // height: "100%",
                        backgroundColor:"var(--card-color)",
                        boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.15)",
                        borderRadius: "15px",
                        padding: "0px 15px",
                        fontSize: "16px"
                    }}
                    placeholder="搜尋卡片"
                />
            </form>
            {/* <button className="flip-button" onClick={() => props.coverAll(props.controlsRight) } style={{borderRadius:"15px 0 0 15px"}}> 
                <CardBackIcon  style={{width:"32px", transform:"translateX(6%)"}}/>
                <span className="flip-button-text zh-bold" style={{left: "213.5%"}}>全部覆蓋</span>
            </button>

            <button className="flip-button" onClick={() => props.revealAll(props.controlsRight)} style={{borderRadius:"0 15px 15px 0", marginLeft:"0"}}> 
                <CardFrontIcon style={{width:"32px", transform:"translateX(-6%)"}}/>
                <span className="flip-button-text zh-bold">全部翻開</span>
            </button>

            {props.additionalButton} */}
        </div>
    )
}

export default SearchBar;