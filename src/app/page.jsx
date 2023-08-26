"use client"
import LetterInputs from "../components/LetterInputs/LetterInputs"
import ListResult from "../components/ListResult/ListResult"
import {useState, useEffect} from 'react';

export default function Home() {

  const [correctPlacedLetters, setCorrectPlacedLetters] = useState("");

  const [incorrectPlacedLetters, setincorrectPlacedLetters] = useState("");

  const [fileContent, setFileContent] = useState("");
  
  const [invalidLetters, setInvalidLetter] = useState("");

  const [results, setResults] = useState([]);

  const handleInvalidLetterchange = (e) => {
    setInvalidLetter(e.target.value.toLocaleLowerCase());
    //console.log(e.target.value);
  }

  function handleSolveButton(){
    var validWords = sortOnInvalidLetters(fileContent, invalidLetters);
    //console.log(validWords);
    validWords = sortOnValidLetters(validWords, incorrectPlacedLetters);
    //console.log(validWords);
    validWords = solveWordle(validWords, correctPlacedLetters);
    setResults(validWords);
  }

  useEffect(() => {
    fetch('/listOf5LetterWords.txt') 
      .then(response => response.text())
      .then(data => {
        setFileContent(data);
      })
      .catch(error => {
        console.error('Error fetching file:', error);
      });
  }, []);

  //Sort away all the words with invalid letters
  function sortOnInvalidLetters(fileContent, letters){
    let arrayOfWords = fileContent.split("\n");
    let arrayOfInvalidLetters = letters.split("");

    arrayOfInvalidLetters.forEach(letter => {
      let temporaryList = arrayOfWords.filter(word => word.split('').every(char => char != letter));
      arrayOfWords = temporaryList;
    });
    return arrayOfWords;
  }

  //Sort to only include all the words with valid letters
  function sortOnValidLetters(words, letters){
    let arrayOfInvalidLetters = letters.split("");
    arrayOfInvalidLetters.forEach(letter => {
      let temporaryList = words.filter(word => word.includes(letter));
      words = temporaryList;
    });
    return words;
  }


  function solveWordle(possibleWords, letters){
    let arrayOfInvalidLetters = letters.split("");
    let result = possibleWords;

    console.log("possibleWords", possibleWords);
    
    for (let i = 0; i < arrayOfInvalidLetters.length; i++) {
      
      let currentLetter = arrayOfInvalidLetters[i];

      if(currentLetter == "_"){
        continue;
      }
      result = possibleWords.filter(x => x.split("")[i] == currentLetter);
      possibleWords = result;
    }
    return result;
  }


  return (
    <main className="bg-gray-200">
     <div className="bg-gray-200 w-full text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">SilverOctoWordleSolver</span></h1>
        <h4>Input correct letters at the correct spaces</h4>
        <h4>Please use _ at the missing spaces</h4>
        <LetterInputs dataToParent={setCorrectPlacedLetters} />
        <h4>Type valid letters but at incorrect spaces</h4>
        <LetterInputs dataToParent={setincorrectPlacedLetters} />
        <h4>Input all the used incorrect letters</h4>
        <input onChange={handleInvalidLetterchange} value={invalidLetters} className="text-center border-2 border-light-blue-500 border-opacity-100 mb-4 mr-1"></input>
        <br/>
        <button onClick={handleSolveButton} className="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Submit</button>
        <ListResult listResult={results} />
      </div>
    </main>
  )
}
