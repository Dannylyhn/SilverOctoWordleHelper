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
    <main>
     <div className="mt-20 h-screen w-screen text-center">
        <h1 className="mt-4 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">SilverOctoWordleSolver</span></h1>
        <h4 className="text-lg font-bold text-black-500 lg:text-xl dark:text-gray-400">Input correct letters at the correct spaces</h4>
        <h4>Please use &apos;_&apos; at the missing spaces</h4>
        <LetterInputs dataToParent={setCorrectPlacedLetters} />
        <h4>Input valid letters at incorrect spaces</h4>
        <LetterInputs dataToParent={setincorrectPlacedLetters} />
        <h4>Input all the used invalid letters</h4>
        <input onChange={handleInvalidLetterchange} value={invalidLetters} className="rounded-lg text-center px-1 py-1 mr-1 border focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
        <br/>
        <button onClick={handleSolveButton} className="h-10 px-4 m-4 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Solve</button>
        <ListResult listResult={results} />
        <h3 className="mt-10 mb-4 font-extrabold lg:text-2xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-red-800 from-blue-300">Visit me at https://github.com/Dannylyhn</span></h3>
      </div>
    </main>
  )
}
