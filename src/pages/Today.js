import './Today.css'
import CardGrid from '../components/CardGrid'
import ButtonsControlAll from '../components/ButtonsControlAll'
import NewCardPopUp from '../components/NewCardPopUp'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ReactComponent as PlusIcon } from '../img/plus.svg'

function Today(props) {
    const emptyCards = {
        days : -1,
        level : 0,
        fields : ["", "", "", "", "", "", "", ""],
        tags : [] 
    }
    const maxEmptyCards = 10

    const defaultUserData = require("../user/default.json")

    const [userData, setUserData] = useState({
        ...defaultUserData,
        cards: [...Array(maxEmptyCards).fill(emptyCards), ...defaultUserData.cards],
        isLoading: true
    })

    const [flipList, setFlipList] = useState(Array(10000).fill(true))
    const [numOfNewCards, setNumOfNewCards] = useState(0)
    
    useEffect(() => {
        setFlipList(Array((userData.info.numOfCards + maxEmptyCards) * 2).fill(true))
    }, [userData.info])

    useEffect(() => {
        console.log('fetch api (today)')

        axios.get("/api-today").then((res) => {
            setUserData({
                ...res.data,
                cards: [...Array(maxEmptyCards).fill(emptyCards), ...res.data.cards],
                isLoading: false
            })
        }).catch((err) => {
            console.error(err)
        })
        
    }, [])


    const setCardsToday = props.setCardsToday

    useEffect(() => {
        setCardsToday(userData.info.numOfCards + numOfNewCards)
    }, [userData.info.numOfCards, numOfNewCards, setCardsToday])

    const setIsLoading = props.setIsLoading

    useEffect(() => {
        setIsLoading(userData.isLoading)
        console.log(userData.isLoading)
    }, [userData.isLoading, setIsLoading])
    
    const summonsPopUp = () => {
        document.getElementById("clearInput").click()
        document.getElementById("clearTag").click()
        document.getElementById("block").style.visibility = "visible"
        document.getElementById("block").style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        document.getElementById("new-card-pop-up").style.transform = "translateX(-50%) translateY(50%)"
        document.getElementById("new-card-pop-up").style.bottom = "50%"
        document.getElementById("newCardInput0").focus()
    }

    const coverAll = (right) => {
        if(!right) {
            setFlipList(flipList.map((v, i) => {return (!(i % 2) && i >= (maxEmptyCards - numOfNewCards) * 2 ? false : v)}))
        }else{
            setFlipList(flipList.map((v, i) => {return (  i % 2 && i >= (maxEmptyCards - numOfNewCards) * 2  ? false : v)}))
        }
    }

    const revealAll = (right) => {
        if(!right) {
            setFlipList(flipList.map((v, i) => {return (!(i % 2) && i >= (maxEmptyCards - numOfNewCards) * 2 ? true : v)}))
        }else{
            setFlipList(flipList.map((v, i) => {return (  i % 2 && i >= (maxEmptyCards - numOfNewCards) * 2  ? true : v)}))
        }
    }

    const flipOne = (index) => {
        const newFlipList = [...flipList] // study this syntax later
        newFlipList[index] = !newFlipList[index]
        setFlipList(newFlipList)
    }

    const setCardsData = (newCardData, tmp) => {
        setUserData({
            ...userData,
            cards: userData.cards.map((v, i) => (i === maxEmptyCards - tmp - 1 ? newCardData : v))
        })
    }

    const plusButton =  <button className="plus-button" onClick={summonsPopUp}>
                            <PlusIcon style={{width:"32px"}}/>
                            <span className="plus-button-text zh-bold">新增卡片</span>
                        </button>

    return (
        <div style={{opacity:(userData.isLoading ? "0" : "1"), transition:"0.5s"}}>
            <div className='today-grid' style={{gridAutoRows:"auto"}}>
                
                <div>
                    <ButtonsControlAll
                        controlsRight={false}
                        coverAll={coverAll}
                        revealAll={revealAll}
                        additionalButton={null}
                    />
                </div>
                    
                <div>
                    <ButtonsControlAll 
                        controlsRight={true}
                        coverAll={coverAll}
                        revealAll={revealAll}
                        additionalButton={plusButton}
                    />
                </div>
            </div>


            {/* {addedCards} */}

            <CardGrid 
                numOfCards={userData.info.numOfCards}
                flipList={flipList}
                flipFunc={flipOne}
                rightCardLayout={userData.layout.right}
                leftCardLayout={userData.layout.left}
                settings={userData.settings}
                cards={userData.cards} // add filters in the future
                numOfNewCards={numOfNewCards}
                maxEmptyCards={maxEmptyCards}
            />

            <NewCardPopUp 
                numOfNewCards={numOfNewCards}
                setNumOfNewCards={setNumOfNewCards}
                settingsData={userData.settings}
                cardsData={userData.cards}
                setCardsData={setCardsData}
                maxEmptyCards={maxEmptyCards}
            />
        </div>
    )
}
  
export default Today;