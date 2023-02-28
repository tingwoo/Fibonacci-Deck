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
import Loading from './components/Loading'

function App() {
    const [cardsToday, setCardsToday] = useState(0)
    const [isLoading, setIsLoading] = useState(true)


    return (
        <div className="App">
            <div className='side'>
                <Sidebar />
                <Routes>
                    <Route path="/" element={
                        <DailyInfo cardsToday={cardsToday} isLoading={isLoading}/>
                    } />
                    <Route path="*" element={null} />
                </Routes>
            </div>

            <div className="block" id="block" onClick={() => document.getElementById("cancel").click()}></div>
            
            <div className="main">
                <Routes>
                    <Route path="/"    element={<Today setIsLoading={setIsLoading} setCardsToday={setCardsToday}/>} />
                    <Route path="list" element={<List  setIsLoading={setIsLoading}/>}  />
                    <Route path="help" element={<Help/>}  />
                    <Route path="*"    element={<NotFound />} />
                </Routes>

                <Loading isLoading={isLoading}/>
            </div>
        </div>
    );
}

export default App;
