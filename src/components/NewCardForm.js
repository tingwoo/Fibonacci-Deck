import { useState } from 'react'
import {ReactComponent as CrossIcon} from '../img/cross_small.svg'
import './NewCardPopUp.css'

function NewCardForm() {

    
    const [userData, setUserData] = useState(require("../user/testUserData.json"))
    const [newCardTag, setNewCardTag] = useState([])

    const deleteTag = (i) => {
        setNewCardTag(newCardTag.filter(ele => ele !== i))
    }

    const selectTag = (i) => {
        if(newCardTag.findIndex(ele => ele === i) === -1){
            setNewCardTag([...newCardTag, i])
        }
    }

    const clearTag = () => {
        setNewCardTag([])
    }
    

    const InputListIndex = [...Array(userData.settings.nameOfFields.length).keys()]
    const inputList = InputListIndex.map((i) => 
        <div className="input-box" key={i}>
            <label htmlFor={`newCardInput${i}`} className="input-box-text zh-bold">{userData.settings.nameOfFields[i]}</label>
            <input 
                type="text" 
                // name="username" 
                // value={inputs.username || ""} 
                // onChange={handleChange}
                className={`input-box-field ${userData.settings.langOfFields[i]}-regular`} id={`newCardInput${i}`}/>
        </div>
    )

    return (
        <div>
            {inputList}

            <div className="form-tags-box" style={{borderBottomLeftRadius: "0", borderBottomRightRadius: "0", marginBottom: "auto"}}>
                <span className="input-box-text zh-bold" style={{margin:"auto"}}>標籤</span>
                <p className={`form-tags-group ${userData.settings.langOfTags}-regular`} style={{marginLeft: "85px"}}> 
                    {[...Array(newCardTag.length).keys()].map((i) => 
                        <span className="form-tags-selected" key={i}>
                            <button className="form-tags-remove-button" onClick={() => {deleteTag(newCardTag[i])}}>
                                <CrossIcon style={{fill: "var(--tag-color)"}}/>
                            </button>
                            {userData.settings.nameOfTags[newCardTag[i]]}
                        </span>)
                    }
                </p> 
            </div>

            <div className={`form-tags-box ${userData.settings.langOfTags}-regular`} style={{borderTopLeftRadius: "0", borderTopRightRadius: "0"}}>
                <p className="form-tags-group"> 
                    {[...Array(userData.settings.nameOfTags.length).keys()].map((i) => 
                        <span className="form-tags" key={i} onClick={() => {selectTag(i)}}>
                            {userData.settings.nameOfTags[i]}
                        </span>)
                    }
                </p> 
            </div> 

            {/* you can't see this button */}
            <button id="clearTag" onClick={clearTag}></button>
        </div>
    );
}
  
export default NewCardForm;