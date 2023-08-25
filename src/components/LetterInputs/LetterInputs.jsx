import {useState} from 'react';

export default function LetterInputs() {

    const inputStyle = "border-4 border-light-blue-500 border-opacity-100"
    
    const [letter, setLetter] = useState("");
    const [letter2, setLetter2] = useState("");
    const [letter3, setLetter3] = useState("");
    const [letter4, setLetter4] = useState("");
    const [letter5, setLetter5] = useState("");

    const handleLetterchange = (e) => {
        setLetter(e.target.value);
        console.log(e.target.value);
    }
    const handleLetter2change = (e) => {
      setLetter2(e.target.value);
      console.log(e.target.value);
    }
    const handleLetter3change = (e) => {
      setLetter3(e.target.value);
      console.log(e.target.value);
    }
    const handleLetter4change = (e) => {
      setLetter4(e.target.value);
      console.log(e.target.value);
    }
    const handleLetter5change = (e) => {
      setLetter5(e.target.value);
      console.log(e.target.value);
    }
    

    return (
      <div className="">
        <input onChange = {handleLetterchange} value = {letter} className={inputStyle}></input>
        <input onChange = {handleLetter2change} value = {letter2} className={inputStyle}></input>
        <input onChange = {handleLetter3change} value = {letter3} className={inputStyle}></input>
        <input onChange = {handleLetter4change} value = {letter4} className={inputStyle}></input>
        <input onChange = {handleLetter5change} value = {letter5} className={inputStyle}></input>
      </div>
    )
  }