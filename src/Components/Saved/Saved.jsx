import React, { useEffect, useState } from 'react'
import './saved.css'
import SavedCard from '../SavedCard/SavedCard'

function Saved() {
  const [saved, setSaved] = useState([])

  const getData =()=>{
    const data = JSON.parse(localStorage.getItem('UnitConverter'))
    if(!data){
      return
    }
    setSaved(data)
  }
  useEffect(() => {
    getData()
  }, [])


  return (
    <div className='saved'>
      <div className='saved-box'>
        <h2>saved</h2>
        <div className='saved-container'>
          {
            saved.length===0?
            <p>No results yet, try the unit converter</p>
            :
            saved.map(item=><SavedCard value1={item.value1} value2={item.value2} text1={item.text1} text2={item.text2} key={item.id} id={item.id}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default Saved