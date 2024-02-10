import './NewCardPopUp.css'
import NewCardForm from './NewCardForm'
import { useState } from 'react'
import {ReactComponent as CrossIcon} from '../img/cross.svg'
import {ReactComponent as CheckIcon} from '../img/check.svg'
import axios from 'axios'


function NewCardPopUp(props) {
    const [newCardTag, setNewCardTag] = useState([])

    const removesPopUp = () => {
        document.getElementById("block").style.backgroundColor = "rgba(0, 0, 0, 0)"
        document.getElementById("block").style.visibility = "hidden"
        document.getElementById("new-card-pop-up").style.transform = "translateX(-50%) translateY(110%)"
        document.getElementById("new-card-pop-up").style.bottom = "0%"
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target);

        const fields = []
        for (const [, value] of formData) {
            fields.push(value)
        }

        while(fields.length < 8){ // not very adaptable
            fields.push('')
        }

        const newCardData = {
            days : 1,
            level : 1,
            createdTime : Math.floor(Date.now() / 100) - 16776840000,
            fields : fields,
            tags : newCardTag 
        }

        const tmp = props.numOfNewCards

        props.setNumOfNewCards(props.numOfNewCards + 1)

        props.setCardsData(newCardData, tmp)

        axios.post('/api-new-card', newCardData).then((response) => {
            console.log(response.data)
            // console.log(response.status)
            // console.log(response.data.token)
        })
    }

    return (
        <div className="new-card-pop-up" id="new-card-pop-up">
            <p className="zh-bold" style={{fontSize: "30px", textAlign: "center", marginBottom:"25px"}}>新增卡片</p>

            <form onSubmit={handleSubmit} autoComplete="off">
                <NewCardForm 
                    newCardTag={newCardTag}
                    setNewCardTag={setNewCardTag}
                    settingsData={props.settingsData}
                />

                {/* you can't see this button */}
                <button type="reset" id="clearInput"></button>
                
                
                <div className="form-button-set">
                    <button type="button" className="save-button" id="cancel" onClick={() => {removesPopUp()}}>
                        <CrossIcon style={{width:"32px", fill:"#CF1515"}}/>
                        <span className="save-button-text zh-bold">捨棄</span>
                    </button>

                    <button type="submit" className="save-button" onClick={() => {removesPopUp()}} style={{float: "right"}}>
                        <CheckIcon style={{width:"32px", fill:"#609E26"}}/>
                        <span className="save-button-text zh-bold" style={{left:"auto", right:"90%"}}>新增</span>
                    </button>
                </div>
            </form>
        </div>
    );
}
  
export default NewCardPopUp;