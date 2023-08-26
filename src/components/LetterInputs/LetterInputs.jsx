"use client"
import {useState, useEffect, useRef} from 'react';
import React from 'react';


const LetterInputs = (props) => {

   
    const inputStyle = "text-center w-10 rounded-lg px-1 py-1 mr-1 border focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
    const maxLength = 1;
    
    const [letter, setLetter] = useState("");
    const [letter2, setLetter2] = useState("");
    const [letter3, setLetter3] = useState("");
    const [letter4, setLetter4] = useState("");
    const [letter5, setLetter5] = useState("");

    const handleLetterchange = (e) => {
      setLetter(e.target.value.toLocaleLowerCase());
      console.log(e.target.value);
    }
    const handleLetter2change = (e) => {
      setLetter2(e.target.value.toLocaleLowerCase());
      console.log(e.target.value);
    }
    const handleLetter3change = (e) => {
      setLetter3(e.target.value.toLocaleLowerCase());
      console.log(e.target.value);
    }
    const handleLetter4change = (e) => {
      setLetter4(e.target.value.toLocaleLowerCase());
      console.log(e.target.value);
    }
    const handleLetter5change = (e) => {
      setLetter5(e.target.value.toLocaleLowerCase());
      console.log(e.target.value);
    }

    useEffect(() => {
      let result = letter + letter2 +letter3 +letter4+ letter5;
      props.dataToParent(result);
    },[letter, letter2, letter3, letter4, letter5]);

    return (
      <div>
        <input onChange = {handleLetterchange}  maxLength={maxLength} value = {letter} className={inputStyle}></input>
        <input onChange = {handleLetter2change} maxLength={maxLength} value = {letter2} className={inputStyle}></input>
        <input onChange = {handleLetter3change} maxLength={maxLength} value = {letter3} className={inputStyle}></input>
        <input onChange = {handleLetter4change} maxLength={maxLength} value = {letter4} className={inputStyle}></input>
        <input onChange = {handleLetter5change} maxLength={maxLength} value = {letter5} className={inputStyle}></input>
      </div>
    )

  }
  export default LetterInputs;