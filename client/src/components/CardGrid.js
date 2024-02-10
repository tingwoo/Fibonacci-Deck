import Card from './Card'

function CardGrid(props) {
    const handleUndefined = (t) =>{
        return t === undefined ? true : t
    }

    let cardListIndex = [...Array((props.numOfCards + props.maxEmptyCards) * 2).keys()]
    let cardList = cardListIndex.map((i) => (i >= (props.maxEmptyCards - props.numOfNewCards) * 2 ?
        <Card 
            flipData={handleUndefined(props.flipList[i])}
            flipFunc={props.flipFunc}
            index={i}
            key={i}
            layout={i % 2 ? props.rightCardLayout : props.leftCardLayout}
            settings={props.settings}
            content={props.cards[Math.floor(i/2)]}
            empty={false}
        /> :
        <Card 
            flipData={handleUndefined(props.flipList[i])}
            flipFunc={props.flipFunc}
            index={i}
            key={i}
            layout={i % 2 ? props.rightCardLayout : props.leftCardLayout}
            settings={props.settings}
            content={props.cards[Math.floor(i/2)]}
            empty={true}
        />
    ))

    return (
        <div className='today-grid'>
            {cardList}
        </div>
    );
}
  
export default CardGrid;