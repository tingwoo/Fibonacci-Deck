import { useState } from 'react'
import './NewCardPopUp.css'

function NewCardForm() {

    
    const [userData, setUserData] = useState(require("../user/testUserData.json"))

    // ??
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }
    // ??

    const InputListIndex = [...Array(userData.settings.nameOfFields.length).keys()]
    const inputList = InputListIndex.map((i) => 
        <div className="input-box" key={i}>
            <span className="input-box-text zh-bold">{userData.settings.nameOfFields[i]}</span>
            <input 
                type="text" 
                // name="username" 
                // value={inputs.username || ""} 
                // onChange={handleChange}
                className={`input-box-field ${userData.settings.langOfFields[i]}-regular`} id={i === 0 ? "first" : null}/>
        </div>
    )

    return (
        <form onSubmit={handleSubmit}>
            {inputList}
            {/* <input type="submit" /> */}
        </form>
    );
}
  
export default NewCardForm;