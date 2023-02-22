import './NewCardPopUp.css'
import NewCardForm from './NewCardForm'
import {ReactComponent as CrossIcon} from '../img/cross.svg'
import {ReactComponent as CheckIcon} from '../img/check.svg'


function NewCardPopUp() {

    const unblock = () => {
        document.getElementById("block").style.backgroundColor = "rgba(0, 0, 0, 0)"
        document.getElementById("block").style.visibility = "hidden"
        document.getElementById("new-card-pop-up").style.transform = "translateX(-50%) translateY(110%)"
        document.getElementById("new-card-pop-up").style.bottom = "0%"
    }

    const handleChange = (event) => {

    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const cancelInput = () => {
        // document.getElementById("123we").click()
    }

    const saveInput = () => {
        
    }

    return (
        <div className="new-card-pop-up" id="new-card-pop-up">
            <p className="zh-bold" style={{fontSize: "30px", textAlign: "center", marginBottom:"25px"}}>新增卡片</p>

            <form onSubmit={handleSubmit} autoComplete="off">
                <NewCardForm />

                {/* you can't see this button */}
                <button type="reset" id="clearInput"></button>
                
                
                <div className="form-button-set">
                    <button className="save-button" id="cancel" onClick={() => {unblock(); cancelInput();}}>
                        <CrossIcon style={{width:"32px", fill:"#CF1515"}}/>
                        <span className="save-button-text zh-bold">捨棄</span>
                    </button>

                    <button className="save-button" onClick={() => {unblock(); saveInput();}} style={{float: "right"}}>
                        <CheckIcon style={{width:"32px", fill:"#609E26"}}/>
                        <span className="save-button-text zh-bold" style={{left:"auto", right:"90%"}}>新增</span>
                    </button>
                </div>
            </form>
        </div>
    );
}
  
export default NewCardPopUp;