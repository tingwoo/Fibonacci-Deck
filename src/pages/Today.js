import './Today.css'
import CardGrid from '../components/CardGrid'
import ButtonsControlAll from '../components/ButtonsControlAll'
import { useState, useEffect } from 'react'
import { ReactComponent as PlusIcon } from '../img/plus.svg'

function Today(props) {
    
    // layout: [6] -> show tag, [7] -> show level
    const [firstCardStat, setFirstCardStat] = useState(false)
    const [flipList, setFlipList] = useState(Array(10000).fill(true))
    // console.log(flipList[100000])
    
    useEffect(() => {
        setFlipList(Array((props.infoData.numOfCards + props.maxEmptyCards) * 2).fill(true));
    }, [props.infoData]);
    
    const summonsPopUp = () => {
        setFirstCardStat(true)
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
            setFlipList(flipList.map((v, i) => {return (!(i % 2) && i >= (props.maxEmptyCards - props.numOfNewCards) * 2 ? false : v)}))
        }else{
            setFlipList(flipList.map((v, i) => {return (  i % 2 && i >= (props.maxEmptyCards - props.numOfNewCards) * 2  ? false : v)}))
        }
    }

    const revealAll = (right) => {
        if(!right) {
            setFlipList(flipList.map((v, i) => {return (!(i % 2) && i >= (props.maxEmptyCards - props.numOfNewCards) * 2 ? true : v)}))
        }else{
            setFlipList(flipList.map((v, i) => {return (  i % 2 && i >= (props.maxEmptyCards - props.numOfNewCards) * 2  ? true : v)}))
        }
    }

    const flipOne = (index) => {
        const newFlipList = [...flipList] // study this syntax later
        newFlipList[index] = !newFlipList[index]
        setFlipList(newFlipList)
    }

    const plusButton =  <button className="plus-button" onClick={summonsPopUp}>
                            <PlusIcon style={{width:"32px"}}/>
                            <span className="plus-button-text zh-bold">新增卡片</span>
                        </button>

    return (
        <div>
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
                numOfCards={props.infoData.numOfCards}
                flipList={flipList}
                flipFunc={flipOne}
                rightCardLayout={props.layoutData.right}
                leftCardLayout={props.layoutData.left}
                settings={props.settingsData}
                cards={props.cardsData} // add filters in the future
                numOfNewCards={props.numOfNewCards}
                maxEmptyCards={props.maxEmptyCards}
            />

        </div>
    )
}
  
export default Today;