import React from 'react'
import { RxCross2 } from "react-icons/rx";
// import { useForm } from 'react-hook-form'
import'./savedCard.css'


function SavedCard({value1,value2, text1,text2, id}) {
  // const urlBE = process.env.REACT_APP_URL_BE
  // const {register, handleSubmit} = useForm()


  const deletesaved = (idToDelete) => {
    const data = JSON.parse(localStorage.getItem('UnitConverter'));
    const updatedData = data.filter(item => item.id !== idToDelete);
    localStorage.setItem('UnitConverter', JSON.stringify(updatedData));
    window.location.reload(true)
  };
  // const deletesaved = async(idToDelete) => {
  //   const deleteData = await fetch(`${urlBE}data`,{
  //     method: 'DELETE',
  //     body: JSON.stringify(idToDelete),
  //     headers:{
  //       'content-type': 'application/json'
  //     }
  //   })
  //   const json = await deleteData.json()
  //   console.log(json.message)
  //   window.location.reload(true)
  // };
  //  agregar el handleSubmit al onClick y cambiar id por _id


  return (
    <div className='saved-card'>
      {/* <input value={_id} {...register("_id")} className='id-input'/> */}
      <p>{value1} {text1} → {value2} {text2}</p>
      <button className='saved-card-button' onClick={()=>deletesaved(id)}>
        <RxCross2/>
      </button>
    </div>
  )
}

export default SavedCard