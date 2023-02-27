import './App.css';
import { Routes, Route } from "react-router-dom";
import Today from './pages/Today'
import List from './pages/List'
import NotFound from './pages/NotFound'
import Sidebar from './components/Sidebar'
import DailyInfo from './components/DailyInfo'
import NewCardPopUp from './components/NewCardPopUp'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
    const emptyCards = {
        days : -1,
        level : 0,
        fields : ["", "", "", "", "", "", "", ""],
        tags : [] 
    }
    const maxEmptyCards = 10

    const originUserData = require("./user/default.json")
    const [infoData, setInfoData] = useState(originUserData.info) // does not consider empty cards
    const [layoutData, setLayoutData] = useState(originUserData.layout)
    const [settingsData, setSettingsData] = useState(originUserData.settings) 
    const [cardsData, setCardsData] = useState([...Array(maxEmptyCards).fill(emptyCards), ...originUserData.cards])
    const [numOfNewCards, setNumOfNewCards] = useState(0)
    // const [backendData, setBackendData] = useState([{}])

    useEffect(() => {

        console.log('fetch api')

        axios.get("/api").then((res) => {
            console.log(res.data)
            setInfoData(res.data.info)
            setLayoutData(res.data.layout)
            setSettingsData(res.data.settings)
            setCardsData([...Array(maxEmptyCards).fill(emptyCards), ...res.data.cards])
        })
        
    }, [])

    return (
      
        <div className="App">
            <div className='side'>
                <Sidebar />
                <Routes>
                    <Route path="/" element={
                        <DailyInfo infoData={infoData} numOfNewCards={numOfNewCards}/>
                    } />
                    <Route path="*" element={null} />
                </Routes>
            </div>

            <div className="block" id="block" onClick={() => document.getElementById("cancel").click()}></div>
            <NewCardPopUp 
                numOfNewCards={numOfNewCards}
                setNumOfNewCards={setNumOfNewCards}
                settingsData={settingsData}
                cardsData={cardsData}
                setCardsData={setCardsData}
                maxEmptyCards={maxEmptyCards}
            />
            <div className="main">
                <Routes>
                    <Route path="/" element={
                        <Today
                            infoData={infoData}
                            layoutData={layoutData}
                            settingsData={settingsData}
                            cardsData={cardsData}
                            numOfNewCards={numOfNewCards}
                            maxEmptyCards={maxEmptyCards}
                        />
                    } />
                    <Route path="list" element={
                        <List
                            infoData={infoData}
                            layoutData={layoutData}
                            settingsData={settingsData}
                            cardsData={cardsData}
                            numOfNewCards={numOfNewCards}
                        />
                    } />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
