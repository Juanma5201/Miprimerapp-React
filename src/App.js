import "./styles.css";
import Cards from "./componentes/cards";
import { useState } from "react";
const headingStyles = { color: "blue", fontSize: "25px" };
function App(){
const [counter, setCounter]= useState(0)
const handleClick1=() =>{setCounter(counter +1)}
const handleClick2=() =>{setCounter(counter *0)}
const handleClick3=() =>{setCounter(counter -1)}
const handleClick4=() =>{setCounter(counter +5)}
const handleClick5=() =>{setCounter(counter -5)}
  return (
    <div className="App">
      <div><h1>Contador</h1></div>
      <div className="Contador">{counter}</div>
      <div className="Botones">
      <button id="Boton1" onClick={handleClick1}>Sumar</button>
      <button id="Boton2" onClick={handleClick2}>Reset</button>
      <button id="Boton3" onClick={handleClick3}>Restar</button>
      <button id="Boton4" onClick={handleClick4}>+ 5</button>
      <button id="Boton5" onClick={handleClick5}>- 5</button>
      </div>
      <div className="wrapper">
      <div><h1>Cards</h1></div>
        <Card id=""
        img="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg"
        title="Gato"
        description="Jugando con una flor"
        button="mas info"/>
        <Card id=""
        img="https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_960_720.jpg"
        title="Tigre"
        description="en Pantano"
        button="mas info"/>
        <Card id=""
        img="https://cdn.pixabay.com/photo/2016/10/31/14/55/rottweiler-1785760_960_720.jpg"
        title="Perros"
        description="Cachorros de Rottweiler"
        button="mas info"/>
        <Card id=""
        img="https://cdn.pixabay.com/photo/2017/12/11/15/34/lion-3012515_960_720.jpg"
        title="León"
        description="León riendo con una niña"
        button="mas info"/>
        <Card id=""
        img="https://larepublica.pe/resizer/v5N3auDjTa_C6y3w-bN_2zehcxk=/1102x648/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/ZRBF6W6YRJAFVPIDX3OPMMZ56A.JPG"
        title="The Batman"
        description="The Batman es una película estadounidense de superhéroes de DC Comics."
        button="mas info"/>
      </div>
    </div>
  );
}
function Card(props){
  return(
    <div className="card">
      <div className="card_body">
        <img className="card_img" src={props.img}/>
        <h2 className="card_title">{props.title}</h2>
        <p className="card_description">{props.description}</p>
      </div>
      <button className="card_btn">{props.button}</button>
    </div>
  )
}
export default App;
