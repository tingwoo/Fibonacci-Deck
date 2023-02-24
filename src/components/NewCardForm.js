import {ReactComponent as CrossIcon} from '../img/cross_small.svg'
import './NewCardPopUp.css'

function NewCardForm(props) {
    const deleteTag = (i) => {
        props.setNewCardTag(props.newCardTag.filter(ele => ele !== i))
    }

    const selectTag = (i) => {
        if(props.newCardTag.findIndex(ele => ele === i) === -1){
            props.setNewCardTag([...props.newCardTag, i])
        }
    }

    const clearTag = () => {
        props.setNewCardTag([])
    }
    

    const InputListIndex = [...Array(props.settingsData.nameOfFields.length).keys()]
    const inputList = InputListIndex.map((i) => 
        <div className="input-box" key={i}>
            <label htmlFor={`newCardInput${i}`} className="input-box-text zh-bold">{props.settingsData.nameOfFields[i]}</label>
            <input 
                type="text" 
                name={`input${i}`} 
                className={`input-box-field ${props.settingsData.langOfFields[i]}-regular`} id={`newCardInput${i}`}/>
        </div>
    )

    return (
        <div>
            {inputList}

            <div className="form-tags-box" style={{borderBottomLeftRadius: "0", borderBottomRightRadius: "0", marginBottom: "auto"}}>
                <span className="input-box-text zh-bold" style={{margin:"auto"}}>標籤</span>
                <p className={`form-tags-group ${props.settingsData.langOfTags}-regular`} style={{marginLeft: "85px"}}> 
                    {[...Array(props.newCardTag.length).keys()].map((i) => 
                        <span className="form-tags-selected" key={i}>
                            <button type="button" className="form-tags-remove-button" onClick={() => {deleteTag(props.newCardTag[i])}}>
                                <CrossIcon style={{fill: "var(--tag-color)"}}/>
                            </button>
                            {props.settingsData.nameOfTags[props.newCardTag[i]]}
                        </span>)
                    }
                </p> 
            </div>

            <div className={`form-tags-box ${props.settingsData.langOfTags}-regular`} style={{borderTopLeftRadius: "0", borderTopRightRadius: "0"}}>
                <p className="form-tags-group"> 
                    {[...Array(props.settingsData.nameOfTags.length).keys()].map((i) => 
                        <span className="form-tags" key={i} onClick={() => {selectTag(i)}}>
                            {props.settingsData.nameOfTags[i]}
                        </span>)
                    }
                </p> 
            </div> 

            {/* you can't see this button */}
            <button type="button" id="clearTag" onClick={clearTag}></button>
        </div>
    );
}
  
export default NewCardForm;