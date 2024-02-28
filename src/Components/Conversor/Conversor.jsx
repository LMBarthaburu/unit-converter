import React, { useEffect, useState } from 'react'
import './conversor.css'
import { TbArrowsLeftRight } from "react-icons/tb";
import { FaRegHeart} from "react-icons/fa";


function Conversor() {
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
  
  const conversor =()=>{
    const input = document.getElementById('input-value').value
    const convertValue = document.getElementById("select-convert").value
    const output = document.getElementById('output-value')
    const inputText = document.getElementById('input-text')
    const outputText = document.getElementById('output-text')
    if(convertValue==='km'){
      const result = input*0.621371
      output.value=result.toFixed(2)
      inputText.innerHTML=convertValue
      outputText.innerHTML='millas'
    }else if(convertValue==='millas'){
      const result = input/0.621371
      output.value=result.toFixed(2)
      inputText.innerHTML=convertValue
      outputText.innerHTML='km'
    } else if(convertValue==='cm'){
      const result = input*0.393701
      output.value=result.toFixed(2)
      inputText.innerHTML=convertValue
      outputText.innerHTML='pulgadas'
    } else if (convertValue==='pulgadas'){
      const result = input/0.393701
      output.value=result.toFixed(2)
      inputText.innerHTML=convertValue
      outputText.innerHTML='cm'
    } else if(convertValue ==='metros'){
      const result = input*3.28084
      output.value=result.toFixed(2)
      inputText.innerHTML=convertValue
      outputText.innerHTML='pies'
    } else {
      const result = input/3.28084
      output.value=result.toFixed(2)
      inputText.innerHTML=convertValue
      outputText.innerHTML='metros'
    }
  }
  const change =()=>{
    const input = document.getElementById('input-value').value
    const newValue = document.getElementById('input-value')
    const output = document.getElementById('output-value').value
    const newOutput = document.getElementById('output-value')
    const inputText = document.getElementById('input-text').innerText
    const newInputText = document.getElementById('input-text')
    const outputText = document.getElementById('output-text').innerText
    const newOutputText = document.getElementById('output-text')
    const convert = document.getElementById("select-convert")
    if(!input){
      alert('Ingrese un valor valido')
    }else{
      newValue.value=output
      newOutput.value = input
      newInputText.innerHTML=outputText
      newOutputText.innerHTML=inputText
      convert.value=outputText
    }
  }

  const save =()=>{
    const input = document.getElementById('input-value').value
    const output = document.getElementById('output-value').value
    const inputReset = document.getElementById('input-value')
    const outputReset = document.getElementById('output-value')
    const inputText = document.getElementById('input-text').innerText
    const outputText = document.getElementById('output-text').innerText
    const id = Math.floor(Math.random() * 100000000);

    if(!input || !output || !inputText || !outputText ){
      alert ('Ingrese un valor valido')
      return
    }
    let ArraySaved = {
      value1: input,
      value2: output,
      text1: inputText,
      text2: outputText,
      id: id
    }
    saved.unshift(ArraySaved)
    localStorage.setItem('UnitConverter',JSON.stringify(saved))
    inputReset.value=''
    outputReset.value=''
    window.location.reload(true)
  }
  return (
    <div className='conversor'>
      <div className='conversor-box'>
        <h2>Conversor de unidades</h2>
        <div>
          <div className='input-box'>
            <div className='input-box-content'>
              <select id="select-convert" name='select-convert' className='input' onChange={conversor}>
                <option value="km">km → millas</option>
                <option value="millas">millas → km</option>
                <option value="pies">pies → metros</option>
                <option value="metros">metros → pies</option>
                <option value="cm">cm → pulgadas</option>
                <option value="pulgadas">pulgadas → cm</option>
              </select>
              <button className='conversor-button' onClick={change}>
                <TbArrowsLeftRight className='rows'/>
              </button>
            </div>
            <div className='input-box-content'>
              <input type="number" className='input  text-rigth' id='input-value' placeholder='Valor a convertir' onChange={conversor}/>
              <p id='input-text'>km</p>
            </div>
          </div>
          <div className='result-box'>
            <button className='conversor-button' onClick={save}>
              <FaRegHeart className='heart'/>
            </button>
            <div className='output-box'>
              <input type="number" className='output' id='output-value' placeholder='Resultado' readOnly/>
              <p id='output-text' className='output-text'>millas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Conversor