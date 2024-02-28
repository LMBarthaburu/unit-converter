import React, { useEffect, useState } from 'react'
import './saved.css'
import SavedCard from '../SavedCard/SavedCard'

function Saved() {
  const [saved, setSaved] = useState([])

  const showPage =()=>{
    if(saved.length===0){
      document.getElementById('saved').style.display='none'
    }else{
      document.getElementById('saved').style.display='flex'
    }
  }
  useEffect(() => {
    showPage()
  }, [saved])// eslint-disable-line react-hooks/exhaustive-deps

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
    <div className='saved' id='saved'>
      <div className='saved-box'>
        <h2>Conversiones guardadas</h2>
        <div className='saved-container'>
          {
            saved.map(item=><SavedCard value1={item.value1} value2={item.value2} text1={item.text1} text2={item.text2} key={item.id} id={item.id}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default Saved