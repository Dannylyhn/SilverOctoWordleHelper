"use client"
import LetterInputs from "../components/LetterInputs/LetterInputs"
import ListResult from "../components/ListResult/ListResult"


export default function Home() {

  

  function handleSolveButton(){
    console.log("Hello")
  }

  return (
    <main className=""> 
      <h1>SilverOctoWordleSolver</h1>
      <h4>Input correct letters at the correct spaces</h4>
      <LetterInputs/>
      <h4>Type the correct letters</h4>
      <LetterInputs/>
      <h4>Input all the used incorrect letters</h4>
      <LetterInputs/>
      <button onClick={handleSolveButton} className="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Submit</button>
      <ListResult/>

    </main>
  )
}
