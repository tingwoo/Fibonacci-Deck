import '../Side.css'
import {ReactComponent as NextIcon} from '../img/next.svg'

function DailyInfo(props) {
    const today = new Date();
    
    return (
        <div className="daily-info">
            <div>
                <p className="zh-bold" style={{fontSize:"18px", lineHeight:"30px"}}>{today.getMonth()+1} 月 {today.getDate()} 日</p>
                <p className="zh-regular" style={{fontSize:"18px", lineHeight:"30px"}}>
                    {props.cardsToday} 張卡片
                </p>
            </div>
            <div className="next-day-button">
                <NextIcon className='next-day-button-icon'/>
                <div className='next-day-button-text zh-bold'>完成練習</div>
            </div>
        </div>
    );
}
  
export default DailyInfo;