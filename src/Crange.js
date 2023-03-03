import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

export default function Crange() {
  const [names, setNames] = useState([]);
  const [startGameText, setStartGameText] = useState("התחלת המשחק והצגת רשימה");
  const namesOl = useRef(null);

  function handleSubmit(event){
    event.preventDefault()
    const newName = event.target.input.value
    if (newName != "") {
        setNames(names => [...names, newName])
    }
    event.target.input.value = ''
    event.target.input.focus()
    namesOl.current.classList.remove("show")
    setStartGameText("התחלת המשחק והצגת רשימה")
  }
  function startGame() {
    namesOl.current.classList.toggle("show")
    console.log(
        namesOl.current.querySelectorAll("li")

    );
    namesOl.current.querySelectorAll("li").forEach(element => {
        element.classList.remove("hide")
    });
    if (startGameText == "התחלת המשחק והצגת רשימה") {
        setStartGameText("הסתרת רשימה")
    } else {
        setStartGameText("התחלת המשחק והצגת רשימה")
    }
  }
  function deleteName(event) {
    event.target.parentElement.classList.add("hide")

  }
  return (
    <div className="container">
        <h1>
            מטווח מפורסמים
        </h1>
      מספר שחקנים: {names.length}
      <form onSubmit={handleSubmit}>
        <label>
          שם:
        </label>
        <input type="text" name="input" />        
        <input className="btn submit" type="submit" value="שליחה" />
      </form>
      <button className="btn start" onClick={startGame}>{startGameText}</button>
      <br/>
      <ol ref={namesOl} className="names">
        {
            names.map((x, i) =>
            <li key={i}>{x} <button onClick={deleteName} className='x'>X</button></li>
            )
        }

      </ol>
    </div>
  )
}