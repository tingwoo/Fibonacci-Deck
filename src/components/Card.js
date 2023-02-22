// import {useState} from 'react'
import './Card.css'
import {ReactComponent as CardBack} from '../img/cardBack.svg'

const levelColor = [
    {backgroundColor:"#B4B4B4"},
    {backgroundColor:"#3E81D9"},
    {backgroundColor:"#54B553"},
    {backgroundColor:"#A9CB4A"},
    {backgroundColor:"#F4BE1F"},
    {backgroundColor:"#EB9D3F"},
    {backgroundColor:"#CC4B32"},
    {background:"linear-gradient(315deg, rgba(89,61,31,1) 0%, rgba(199,125,57,1) 100%)"},
    {background:"linear-gradient(315deg, rgba(110,110,110,1) 0%, rgba(213,213,213,1) 100%)"},
    {background:"linear-gradient(315deg, rgba(197,139,34,1) 0%, rgba(255,209,0,1) 100%)"}
]

function Card(props) {
    // const [flip, setFlip] = useState(props.flip);

    // let cardListIndex = [...Array(props.numOfCards).keys()]
    // let cardList = cardListIndex.map((i) => <Card flip={flipList[i]} func={flipOne} index={i} key={i} layout={props.layout} settings={props.settings} content={props.cardData[i]}/>)

    // classNameList = ["card-title", "card-field-short", "card-field-tag", "card-field-long"]

    let tagListIndex = [...Array(props.content.tags.length).keys()]
    let tagList = tagListIndex.map((i) => <span className="card-field-tag" key={i}>{props.settings.nameOfTags[props.content.tags[i]]}</span>)

    return (
        <div className={`card ${props.flip ? '' : 'flip'}`} onClick={() => props.func(props.index)}>
            <div className="card-front">
                {props.layout[7] ?
                    <div className="card-level ti" style={levelColor[props.content.level-1]}>
                        {props.content.level}
                    </div> :
                    null
                }

                <div className="card-content">
                    
                    {/* title */}
                    {props.layout[0] === -1 ?
                        null : 
                        <p className={`${props.settings.langOfFields[props.layout[0]]}-bold card-title`}>
                            {props.content.fields[props.layout[0]]}
                        </p>
                    }

                    {/* fields - short */}
                    <p className="card-field-short zh-regular">
                        <span className={props.settings.langOfFields[props.layout[1]] + '-regular'}>
                            {props.content.fields[props.layout[1]]}
                        </span>

                        {(props.layout[1] !== -1 && props.content.fields[props.layout[1]] !== "") && (props.layout[2] !== -1 && props.content.fields[props.layout[2]] !== "") ?
                            "・" :
                            null
                        }
                        
                        <span className={props.settings.langOfFields[props.layout[2]] + '-regular'}>
                            {props.content.fields[props.layout[2]]}
                        </span>
                        
                        {(props.layout[2] !== -1 && props.content.fields[props.layout[2]] !== "") && (props.layout[3] !== -1 && props.content.fields[props.layout[3]] !== "") ?
                            "・" :
                            null
                        }

                        {(props.layout[1] !== -1 && props.content.fields[props.layout[1]] !== "") && (props.layout[3] !== -1 && props.content.fields[props.layout[3]] !== "") && (props.layout[2] === -1 || props.content.fields[props.layout[2]] === "") ?
                            "・" :
                            null
                        }

                        <span className={props.settings.langOfFields[props.layout[3]] + '-regular'}>
                            {props.content.fields[props.layout[3]]}
                        </span>
                    </p>
                    
                    {/* tags */}
                    <p className={props.settings.langOfTags + "-regular"}>
                        {props.layout[6] ? tagList : null}
                    </p>


                    {(props.layout[4] !== -1 && props.content.fields[props.layout[4]] !== "") || (props.layout[5] !== -1 && props.content.fields[props.layout[5]] !== "") ?
                        <div className="card-divider"/> :
                        null
                    }


                    {/* fields - long */}
                    {props.layout[4] === -1 ?
                        null : 
                        <p className={`${props.settings.langOfFields[props.layout[4]]}-regular card-field-long`}>
                            {props.content.fields[props.layout[4]]}
                        </p>
                    }

                    {props.layout[5] === -1 ?
                        null : 
                        <p className={`${props.settings.langOfFields[props.layout[5]]}-regular card-field-long`}>
                            {props.content.fields[props.layout[5]]}
                        </p>
                    }
                </div>
            </div>

            <div className="card-back" style={{boxSizing:"border-box", height:"1em", width:"1.6em", padding:"0.1em"}}>
                {/* <CardBack style={{fill:"#F1F1F1", objectFit:"fill"}}/> */}
            </div>
        </div>
    );
}
  
export default Card;