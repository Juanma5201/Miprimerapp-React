import{useState} from 'react';
function Tarea(props){
    const[value, setValue] = useState(props.title);
    const handleChange=(evento)=>{
        setValue(evento.target.value);
    }
    updateTitle(){
        setTitle('Actualizado');
    }
    function handleAdd(){
        console.log("click")
    }
    
    return(
        <div>
            <h2>{props.title}</h2>
            <button onClick={updateTitle}>
                    borrar
            </button>
            <input type="text" onChange={handleAdd}/>
            <button onClick={handleAdd}>
                    Añadir
            </button>
            <p>El valor del estado es: {value}</p>
        </div>
    )
}
export default Tarea;