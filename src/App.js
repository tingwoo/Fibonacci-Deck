import './App.css';
import { Routes, Route} from "react-router-dom";
import Today from './pages/Today'
import List from './pages/List'
import NotFound from './pages/NotFound'
import Sidebar from './components/Sidebar'
import DailyInfo from './components/DailyInfo'
import NewCardPopUp from './components/NewCardPopUp'
import { useState } from 'react';

function App() {
    const emptyCards = {
        days : -1,
        level : 0,
        fields : ["", "", "", "", "", "", "", ""],
        tags : [] 
    }
    const maxEmptyCards = 10

    const originUserData = require("./user/testUserData.json")
    const [infoData, ] = useState(originUserData.info) // does not consider empty cards
    const [layoutData, ] = useState(originUserData.layout)
    const [settingsData, ] = useState(originUserData.settings) 
    const [cardsData, setCardsData] = useState([...Array(maxEmptyCards).fill(emptyCards), ...originUserData.cards])
    const [numOfNewCards, setNumOfNewCards] = useState(0)

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
                    <Route path="List" element={<List />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
