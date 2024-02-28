import React from 'react'
import { RxCross2 } from "react-icons/rx";
import'./savedCard.css'


function SavedCard({value1,value2, text1,text2, id}) {

  const deletesaved = (idToDelete) => {
    const data = JSON.parse(localStorage.getItem('UnitConverter'));
    const updatedData = data.filter(item => item.id !== idToDelete);
    localStorage.setItem('UnitConverter', JSON.stringify(updatedData));
    window.location.reload(true)
  };

  return (
    <div className='saved-card'>
      <p>{value1} {text1} → {value2} {text2}</p>
      <button className='saved-card-button' onClick={()=>deletesaved(id)}>
        <RxCross2/>
      </button>
    </div>
  )
}

export default SavedCard