"use client"
import {useState, useEffect, useRef} from 'react';
import React from 'react';


const LetterInputs = (props) => {
  const inputStyle = "text-center w-10 rounded-lg px-1 py-1 mr-1 border focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4";
  const maxLength = 1;

  const inputRefs = useRef([]);
  
  const [letters, setLetters] = useState(["", "", "", "", ""]);

  const handleLetterChange = (index, e) => {
    const newLetters = [...letters];
    newLetters[index] = e.target.value.toLowerCase();
    setLetters(newLetters);

    if (e.target.value.length >= maxLength && index < letters.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  useEffect(() => {
    const result = letters.join("");
    props.dataToParent(result);
  }, [letters]);

  return (
    <div>
      {letters.map((letter, index) => (
        <input
          key={index}
          ref={element => inputRefs.current[index] = element}
          onChange={(e) => handleLetterChange(index, e)}
          maxLength={maxLength}
          value={letter}
          className={inputStyle}
        />
      ))}
    </div>
  );
  }
  export default LetterInputs;