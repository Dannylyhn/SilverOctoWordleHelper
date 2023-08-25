"use client"
import LetterInputs from "../components/LetterInputs/LetterInputs"
import ListResult from "../components/ListResult/ListResult"
import {useState, useEffect} from 'react';

export default function Home() {

  const mockData = ["Price", "Canes", "Rises", "Tries"];

  const [correctPlacedLetters, setCorrectPlacedLetters] = useState("");

  const [incorrectPlacedLetters, setincorrectPlacedLetters] = useState("");

  const [fileContent, setFileContent] = useState("");
  

  function handleSolveButton(){
    var validLetters = sortBasedOnInvalidLetters(fileContent, incorrectPlacedLetters);
    console.log(correctPlacedLetters)
    console.log(incorrectPlacedLetters)
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


  function sortBasedOnInvalidLetters(fileContent, invalidLetters){
    console.log(typeof(fileContent));
    let arrayOfWords = fileContent.split("\n");
    console.log(arrayOfWords);
    let arrayOfInvalidLetters = invalidLetters.split("");

    arrayOfInvalidLetters.forEach(element => {
      
    });
    

  }


  return (
    <main>
      <h1>SilverOctoWordleSolver</h1>
      <h4>Input correct letters at the correct spaces</h4>
      <h4>Please use _ at the missing spaces</h4>
      <LetterInputs dataToParent={setCorrectPlacedLetters} />
      <h4>Type valid letters but at incorrect spaces</h4>
      <LetterInputs dataToParent={setincorrectPlacedLetters} />
      <h4>Input all the used incorrect letters</h4>
      <input className="text-center border-2 border-light-blue-500 border-opacity-100 mb-4 mr-1"></input>
      <br/>
      <button onClick={handleSolveButton} className="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Submit</button>
      <ListResult listResult={mockData} />
    </main>
  )
}
