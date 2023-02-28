import './App.css';

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'

import Today from './pages/Today'
import List from './pages/List'
import Help from './pages/Help'
import NotFound from './pages/NotFound'

import Sidebar from './components/Sidebar'
import DailyInfo from './components/DailyInfo'
import NewCardPopUp from './components/NewCardPopUp'
import Loading from './components/Loading'

function App() {
    const emptyCards = {
        days : -1,
        level : 0,
        fields : ["", "", "", "", "", "", "", ""],
        tags : [] 
    }
    const maxEmptyCards = 10

    const defaultUserData = require("./user/default.json")

    const [userData, setUserData] = useState({
        ...defaultUserData,
        cards: [...Array(maxEmptyCards).fill(emptyCards), ...defaultUserData.cards],
        isLoading: true
    })
    // const [infoData, setInfoData] = useState(originUserData.info) // does not consider empty cards
    // const [layoutData, setLayoutData] = useState(originUserData.layout)
    // const [settingsData, setSettingsData] = useState(originUserData.settings) 
    // const [cardsData, setCardsData] = useState([...Array(maxEmptyCards).fill(emptyCards), ...originUserData.cards])
    const [numOfNewCards, setNumOfNewCards] = useState(0)
    // const [backendData, setBackendData] = useState([{}])

    const setCardsData = (newCardData, tmp) => {
        setUserData({
            ...userData,
            cards: userData.cards.map((v, i) => (i === maxEmptyCards - tmp - 1 ? newCardData : v))
        })
        // props.setCardsData(props.)
    }

    useEffect(() => {

        console.log('fetch api')

        axios.get("/api").then((res) => {
            // console.log(res.data)
            setUserData({
                ...res.data,
                cards: [...Array(maxEmptyCards).fill(emptyCards), ...res.data.cards],
                isLoading: false
            })
        }).catch((err) => {
            console.error(err)
        })
        
    }, [])

    return (
        <div className="App">
            <div className='side'>
                <Sidebar />
                <Routes>
                    <Route path="/" element={
                        <DailyInfo infoData={userData.info} numOfNewCards={numOfNewCards}/>
                    } />
                    <Route path="*" element={null} />
                </Routes>
            </div>

            <div className="block" id="block" onClick={() => document.getElementById("cancel").click()}></div>
            <NewCardPopUp 
                numOfNewCards={numOfNewCards}
                setNumOfNewCards={setNumOfNewCards}
                settingsData={userData.settings}
                cardsData={userData.cards}
                setCardsData={setCardsData}
                maxEmptyCards={maxEmptyCards}
            />
            <div className="main">
                <Routes>
                    <Route path="/" element={
                        <Today
                            infoData={userData.info}
                            layoutData={userData.layout}
                            settingsData={userData.settings}
                            cardsData={userData.cards}
                            numOfNewCards={numOfNewCards}
                            maxEmptyCards={maxEmptyCards}
                            isLoading={userData.isLoading}
                        />
                    } />
                    <Route path="list" element={
                        <List
                            infoData={userData.info}
                            layoutData={userData.layout}
                            settingsData={userData.settings}
                            cardsData={userData.cards}
                            numOfNewCards={numOfNewCards}
                        />
                    } />
                    <Route path="help" element={<Help/>}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <Loading isLoading={userData.isLoading}/>
            </div>
        </div>
    );
}

export default App;
