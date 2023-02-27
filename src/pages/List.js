import CardGrid from '../components/CardGrid'

function List(props) {

    const organizeList = (cardList) => {
        // create new independent card array
        var organizedList = [...cardList].filter(tmp => tmp.days !== -1)

        // remove all empty cards
        // organizedList = organizedList

        // sort

        // return array
        return organizedList
    }

    return (
        <div>
            {/* <div className='today-grid' style={{gridAutoRows:"auto"}}>
                
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
            </div> */}


            {/* {addedCards} */}

            <CardGrid 
                numOfCards={props.infoData.numOfCards + props.numOfNewCards}
                flipList={[]}
                flipFunc={() => {}}
                rightCardLayout={props.layoutData.right}
                leftCardLayout={props.layoutData.left}
                settings={props.settingsData}
                cards={organizeList(props.cardsData)}
                numOfNewCards={0}
                maxEmptyCards={0}
            />

        </div>
    )
}
  
export default List;