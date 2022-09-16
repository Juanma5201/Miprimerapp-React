import "./styles.css";
import Saludo from "./componentes/Saludo";
import Tarea from "./componentes/Tarea";

const headingStyles = { color: "blue", fontSize: "25px" };
const nombres = ["José", "María", "Pedro"];
function App() {
  return (
    <div className="App">
      <h1 style={{ color: "red", fontSize: "25px" }}>Hola mundo</h1>
      <h2 style={headingStyles}>lorem10</h2>
      <p className="P1">Primer parrafo</p>
      {nombres.map((nombre, i) => 
        <Saludo name={nombre} key={i} />)}
        <Tarea title="Valores nuevos"/>
    </div>
  );
}
export default App;
