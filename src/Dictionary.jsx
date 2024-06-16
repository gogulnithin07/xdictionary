import { useState } from "react";

const arr=[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

];

function Dictionary(){
const [text,setText]=useState("");
const [out,setOut]=useState(null)
function handleSublit(e){

    e.preventDefault()
    if(text.length){
        return;
    }
    let output=arr.find((val)=>val.word.toLowerCase().trim() === text.toLowerCase());
    output=output?.meaning;
if(output){
    setOut(output);

}
else{
    setOut("Word not found in the dictionary");
    setText("")
}

}
return <div>
    <h1>Dictionary App</h1>
    <form onSubmit={(e)=>handleSublit(e)}>
        <input value={text} type="text"onChange={(e)=>setText(e.target.value)}/>
        <button type="submit">Search</button>
    </form>
    <h4>Definition:</h4>
    <p>{out}</p>
</div>
}
export {Dictionary}