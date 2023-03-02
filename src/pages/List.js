import { useState, useEffect } from 'react'
import axios from 'axios'

import CardGrid from '../components/CardGrid'
import './List.css'

function List(props) {
    const defaultUserData = require("../user/default.json")
    const [userData, setUserData] = useState({
        ...defaultUserData,
        isLoading: true
    })

    useEffect(() => {
        console.log('fetch api (list)')
        axios.get("/api-list").then((res) => {
            setUserData({
                ...res.data,
                isLoading: false
            })
        }).catch((err) => {
            console.error(err)
        }) 
    }, [])

    const setIsLoading = props.setIsLoading

    useEffect(() => {
        setIsLoading(userData.isLoading)
        console.log(userData.isLoading)
    }, [userData.isLoading, setIsLoading])

    return (
        <div style={{opacity:(userData.isLoading ? "0" : "1"), transition:"0.5s"}}>
            <CardGrid 
                numOfCards={userData.info.numOfCards}
                flipList={[]}
                flipFunc={() => {}}
                rightCardLayout={userData.layout.right}
                leftCardLayout={userData.layout.left}
                settings={userData.settings}
                cards={userData.cards}
                numOfNewCards={0}
                maxEmptyCards={0}
            />
        </div>
    )
}
  
export default List;