import {useState} from 'react'
import '../pages/Today.css'

function Card() {
    const [flip, setFlip] = useState(false);
    return (
        <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
            <div className="card-front">
                {/* <p className="zh" style={{fontSize : "0.1em", verticalAlign: "middle", lineHeight: "10em" }}>沒翻</p> */}
            </div>

            <div className="card-back">
                <p className="zh" style={{fontSize : "0.1em", verticalAlign: "middle", lineHeight: "10em" }}>翻開了</p>
            </div>
        </div>
    );
}
  
export default Card;