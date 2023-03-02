import '../Side.css'
import { ReactComponent as TomorrowIcon } from '../img/next.svg'
import { ReactComponent as YesterdayIcon } from '../img/last.svg'
import { useNavigate } from 'react-router'
import axios from 'axios'

function DaySwitcher(props) {
    // const today = new Date();
    const navigate = useNavigate()

    const goTomorrow = () => {
        axios.post('/api-go-tomorrow', null).then((response) => {
            console.log(response.data)
            
            navigate(0)
        })
    }

    const goYesterday = () => {
        axios.post('/api-go-yesterday', null).then((response) => {
            console.log(response.data)
            
            navigate(0)
        })
    }
    
    return (
        <div className="day-switcher">
            
            <div style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
                <div className="switch-day-button" onClick={goYesterday}>
                    <YesterdayIcon className='switch-day-button-icon'/>
                </div>
                <div style={{fontSize: "18px", lineHeight: "30px", textAlign: "center", opacity: (props.isLoading ? "0" : "1")}}>
                    <p className="zh-bold">第 {props.totalDays} 天</p>
                    {props.cardsToday > 0 ? 
                        <p className="zh-regular">{props.cardsToday} 張卡片</p> :
                        <p className="zh-regular">沒有卡片</p>
                    }
                </div>
                <div className="switch-day-button" onClick={goTomorrow}>
                    <TomorrowIcon className='switch-day-button-icon'/>
                </div>
            </div>
        </div>
    );
}
  
export default DaySwitcher;