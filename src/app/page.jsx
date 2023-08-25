"use client"
import LetterInputs from "../components/LetterInputs/LetterInputs"
import ListResult from "../components/ListResult/ListResult"
import {useState} from 'react';


export default function Home() {

  const mockData = ["Price", "Canes", "Rises", "Tries"];

  const [correctPlacedLetters, setCorrectPlacedLetters] = useState("");
  const [incorrectPlacedLetters, setincorrectPlacedLetters] = useState("");

  function handleSolveButton(){
    console.log(correctPlacedLetters)
    console.log(incorrectPlacedLetters)
  }

  return (
    <main className=""> 
      <h1>SilverOctoWordleSolver</h1>
      <h4>Input correct letters at the correct spaces</h4>
      <LetterInputs dataToParent = {setCorrectPlacedLetters} />
      <h4>Type the correct letters</h4>
      <LetterInputs dataToParent = {setincorrectPlacedLetters} />
      <h4>Input all the used incorrect letters</h4>
      <button onClick={handleSolveButton} className="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Submit</button>
      <ListResult listResult={mockData} />

    </main>
  )
}
