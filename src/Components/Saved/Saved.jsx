import React, { useEffect, useState } from 'react'
import './saved.css'
import SavedCard from '../SavedCard/SavedCard'

function Saved() {
  // const urlBE = process.env.REACT_APP_URL_BE
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

  // const getData = async()=>{
  //   const res = await fetch(`${urlBE}data`)
  //   const json = await res.json()
  //   const conversiones = json.conversiones
  //   if(conversiones.length===0){
  //     return
  //   }else{
  //     setSaved(conversiones)
  //   }
  // }
  // useEffect(() => {
  //   getData()
  // }, [])// eslint-disable-line react-hooks/exhaustive-deps
  // cambiar id por _id

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